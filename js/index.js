import Form from './models/Form'
import { DOM } from './views'

// Global state
const state = {
    transaction: null,
    debt: null,
    installment: null,
    minInstallment: null,
    lastInstallment: null,
    period: null,
}

// Form Controller
const controlForm = () => {

}

// Event listeners
DOM.transaction.addEventListener('change', (e) => {
    state.transaction = e.target.value
    console.log(state.transaction)
})