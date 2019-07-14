import { DOM } from "./index";

export const getTransactionValue = () => {
  const transactionValue = DOM.transactionInput.value;
  return transactionValue;
};

export const getInstallmentValue = () => {
  const installmentValue = DOM.installmentInput.value;
  return installmentValue;
};

export const render = (transaction, installment, minInstallment) => {
  DOM.installmentInput.value = installment;
  DOM.installmentInput.setAttribute("min", minInstallment);
  DOM.installmentInput.setAttribute("max", transaction / 2);
};
