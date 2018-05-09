const dom = {
    transaction: document.getElementById("withdrawn"),
    installment: document.getElementById("monthly-payment"),
    form: document.getElementById("form"),
    resultPeriod: document.getElementById("period"),
    resultInstallment: document.getElementById("installment"),
    resultLastInstallment: document.getElementById("last-installment"),
    ifLast: document.getElementById("if-last"),
    resultTotalInterest: document.getElementById("total-interest"),
    resultDifference: document.getElementById("difference"),
    resultTotalPayment: document.getElementById("total-payment"),
    terms: document.getElementById('terms'),
    body: document.querySelector('main')
};


const model = {
    transaction: 0,
    debt: 0,
    installment: 0,
    minInstallment: 0,
    lastInstallment: 0,
    period: 0,
    
    monthlyInterest: 2.2,

    init: function () {
        this.transaction = 0;
        this.debt = 0;
        this.installment = 0;
        this.minInstallment = 0;
        this.lastInstallment = 0;
        this.period = 0;
    }
};


const view = {
    renderSuggest: function(min) {
        if (dom.installment.value < min) {
            dom.installment.value = min;
        }
        dom.installment.min = min;
    },
    init: function() {
        dom.transaction.addEventListener('change', function(e) {
            controller.suggest(e.target.value);
        });
        dom.form.addEventListener('submit', function(e) {
            e.preventDefault();
            controller.calculate();
            dom.body.classList.remove('initial', 'center');
            view.result = true;
        });
        dom.terms.addEventListener('change', function () {
            console.log(view.result);
            if (!view.result) {
                dom.terms.checked ? dom.body.classList.remove("center") : dom.body.classList.add("center");
            }
        });
    },
    result: false,
    render: function (result) {
        dom.resultPeriod.innerHTML = result.period;
        dom.resultInstallment.innerHTML = result.installment;
        if (result.lastInstallment === 0) {
            dom.ifLast.style.display = "none";
        } else {
            dom.resultLastInstallment.innerHTML = result.lastInstallment;
            dom.ifLast.style.display = "inline";
        }
        dom.resultTotalInterest.innerHTML = result.totalInterest() + "%";
        dom.resultDifference.innerHTML = result.difference();
        dom.resultTotalPayment.innerHTML = result.totalPayments;
        controller.modelReset();
    }
};


const controller = {
    suggest: function (transaction) {
        model.minInstallment = Math.ceil(transaction * 0.05 / 10) * 10;
        view.renderSuggest(model.minInstallment);

    },
    calculate: function() {
        model.transaction = dom.transaction.value;
        model.installment = dom.installment.value;
        model.debt = model.transaction;

        while (model.debt !== 'paid') {
            if (Number(model.debt) == Number(model.installment)) {
                model.period++;
                model.debt = "paid";
            } else if (Number(model.debt) > Number(model.installment)) {
                model.debt -= model.installment;
                model.period++;
                if (model.period >= 2) {
                    model.debt += Number((model.debt * (model.monthlyInterest / 100)).toFixed(2));
                }
            } else if (Number(model.debt) < Number(model.installment)) {
                model.lastInstallment = (model.debt).toFixed(0);
                model.debt = "paid";
            }
        }

        view.render(this.result());

    },
    result: function () {
        return {
            period: model.period,
            installment: model.installment,
            lastInstallment: model.lastInstallment,
            totalInterest: function () {
                return (this.totalPayments / (model.transaction / 100) - 100).toFixed(2);
            },
            difference: function () {
                return this.totalPayments - model.transaction;
            },
            totalPayments: model.period * model.installment + Number(model.lastInstallment)
        }
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
