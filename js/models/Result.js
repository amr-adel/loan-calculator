import { monthlyInterest } from "../appConfig";

export default class Result {
  constructor(transaction, installment) {
    this.transaction = transaction;
    this.installment = installment;
    this.debt = transaction;
    this.numberOfInstallments = 0;
  }

  calculate() {
    while (this.debt !== "paid") {
      if (this.debt === this.installment) {
        this.numberOfInstallments++;
        this.debt = "paid";
      } else if (this.debt > this.installment) {
        this.debt -= this.installment;
        this.numberOfInstallments++;
        if (this.numberOfInstallments > 1) {
          this.debt += +(this.debt * monthlyInterest).toFixed(2);
        }
      } else if (this.debt < this.installment) {
        this.lastInstallment = Math.ceil(this.debt);
        this.debt = "paid";
      }
    }
  }
}
