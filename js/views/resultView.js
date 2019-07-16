import { DOM } from "./index";

const changeInnerHTML = (element, innerHTML) => {
  DOM[element].innerHTML = innerHTML;
};

export const renderResult = (
  transaction,
  installment,
  lastInstallment,
  numberOfInstallments
) => {
  DOM.body.classList.remove("initial", "center");

  changeInnerHTML("resultNumberOfInstallments", numberOfInstallments);
  changeInnerHTML("resultInstallment", installment);

  if (lastInstallment === 0) {
    DOM.resultIfLast.style.display = "none";
  } else {
    changeInnerHTML("resultLastInstallment", lastInstallment);
    DOM.resultIfLast.style.display = "inline";
  }

  const totalPayment = installment * numberOfInstallments + lastInstallment;
  const overPay = totalPayment - transaction;
  const totalInterest = ((overPay / transaction) * 100).toFixed(2) + "%";

  changeInnerHTML("resultTotalInterest", totalInterest);
  changeInnerHTML("resultOver", overPay);
  changeInnerHTML("resultTotalPayment", totalPayment);

  const resultRect = DOM.result.getBoundingClientRect();
  window.scrollTo({
    top: resultRect.y,
    behavior: "smooth"
  });
};
