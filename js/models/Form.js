import { minInstallmentPercentage } from '../appConfig'

export default class Form {
  calcMinInstallment() {
    const minInstallment = Math.ceil((this.transaction * minInstallmentPercentage) / 10) * 10
    return minInstallment
  }
}
