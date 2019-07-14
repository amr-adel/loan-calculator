export default class Form {
  calcMinInstallment() {
    const minInstallmentPercentage = 5 / 100;
    const minInstallment = this.transaction * minInstallmentPercentage;

    return Math.ceil(minInstallment / 10) * 10;
  }
}
