const variables = {
    transaction: document.getElementById("withdrawn"),
    installment: document.getElementById("monthly-payment"),
    form: document.getElementById("form"),
    resultPeriod: document.getElementById("period"),
    resultInstallment: document.getElementById("installment"),
    resultLastInstallment: document.getElementById("last-installment"),
    ifLast: document.getElementById("if-last"),
};


const model = {
    transaction: 0,
    debt: 0,
    installment: 0,
    minInstallment: 0,
    lastInstallment: 0,
    period: 0,
    monthlyInterest: 2.2,
    totalInterest: 0,

    init: function () {
        this.transaction = 0;
        this.debt = 0;
        this.installment = 0;
        this.minInstallment = 0;
        this.lastInstallment = 0;
        this.period = 0;
        this.monthlyInterest = 0;
        this.totalInterest = 0;
    }
};


const view = {
    renderSuggest: function(min) {
        if (variables.installment.value < min) {
            variables.installment.value = min;
        }
        variables.installment.min = min;
    },
    init: function() {
        variables.transaction.addEventListener("change", function(e) {
            controller.suggest(e.target.value);
        });
        variables.form.addEventListener("submit", function(e) {
            e.preventDefault();
            controller.calculate();
        });
    },
    renderResult: function(period, installment, lastInstallment) {
        variables.resultPeriod.innerHTML = period;
        variables.resultInstallment.innerHTML = installment;
        if (lastInstallment === 0) {
            variables.ifLast.style.display = "none";
        } else {
            variables.resultLastInstallment.innerHTML = lastInstallment;
            variables.ifLast.style.display = "inline";
        }
        controller.modelReset();
    }
};


const controller = {
    suggest: function (transaction) {
        model.minInstallment = Math.ceil(transaction * 0.05 / 10) * 10;
        view.renderSuggest(model.minInstallment);

    },
    calculate: function() {
        model.transaction = variables.transaction.value;
        model.installment = variables.installment.value;
        model.debt = model.transaction;

        console.log('calculate....');
        
        while (model.debt !== 'paid') {
            if (Number(model.debt) == Number(model.installment)) {
                // console.log(model.debt +' = '+ model.installment);
                model.period++;
                console.log(model.debt);
                model.debt = "paid";
            } else if (Number(model.debt) > Number(model.installment)) {
                // console.log(model.debt + " > " + model.installment);
                model.debt -= model.installment;
                console.log(model.debt);
                model.period++;
            } else if (Number(model.debt) < Number(model.installment)) {
                // console.log(model.debt + " < " + model.installment);
                model.lastInstallment = model.debt;
                console.log('last: ' + model.lastInstallment);
                model.debt = "paid";
            }
        }

        view.renderResult(model.period, model.installment, model.lastInstallment);

        console.log('Done');
    },
    modelReset: function () {
        model.init();
    },
    init: function() {
        this.modelReset();
        view.init();
    }
};

controller.init();