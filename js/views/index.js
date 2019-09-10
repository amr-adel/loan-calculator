const DOM = {
  body: document.querySelector('main'),
  transactionInput: document.getElementById('transaction-input'),
  installmentInput: document.getElementById('installment-input'),
  form: document.getElementById('form'),
  result: document.querySelector('.result'),
  resultNumberOfInstallments: document.getElementById('period'),
  resultInstallment: document.getElementById('installment'),
  resultIfLast: document.getElementById('if-last'),
  resultLastInstallment: document.getElementById('last-installment'),
  resultTotalInterest: document.getElementById('total-interest'),
  resultOver: document.getElementById('difference'),
  resultTotalPayment: document.getElementById('total-payment'),
  modalInput: document.getElementById('modal-toggle-input'),
  modalBG: document.querySelector('.modal__container'),
}

export default DOM
