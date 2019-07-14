export default class Form {

    calcMinInstallment(transaction) {
        const minInstallmentPercentage = 5 / 100
        const minInstallment = transaction * minInstallmentPercentage

        return Math.ceil(minInstallment / 10) * 10
    }
}