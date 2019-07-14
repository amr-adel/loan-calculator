import Form from "./models/Form";
import {
  getTransactionValue,
  getInstallmentValue,
  render
} from "./views/formView";
import { DOM } from "./views";

// Global state
const state = {};

// Form Controller
const controlForm = () => {
  if (!state.form) state.form = new Form();

  state.form.transaction = +getTransactionValue();
  state.form.minInstallment = state.form.calcMinInstallment();

  const installmentInputValue = +getInstallmentValue();

  state.form.installment =
    installmentInputValue === "" ||
    installmentInputValue < state.form.minInstallment
      ? state.form.minInstallment
      : installmentInputValue;

  const { transaction, installment, minInstallment } = state.form;

  render(transaction, installment, minInstallment);
};

// Event listeners
DOM.transactionInput.addEventListener("change", () => {
  controlForm();
});

DOM.form.addEventListener("submit", e => {
  e.preventDefault();
  controlForm();
  console.log(state);
});
