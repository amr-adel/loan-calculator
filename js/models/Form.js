export default class Form {
    constructor(transaction) {
        this.transaction = transaction
    }

    calcMinInstallment() {
        const minInstallmentPercentage = 5 / 100
        const minInstallment = this.transaction * minInstallmentPercentage

        return Math.ceil(minInstallment / 10) * 10
    }
}