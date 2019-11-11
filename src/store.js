import { createStore } from 'redux'
import reducer from './reducers/index'
import { loadState, saveState } from './localStorage'

// Get state from localStorage if it is saved
const persistedState = loadState()

export const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Save state in localStorage on window close
window.onbeforeunload = (() => {
    saveState(store.getState())
})
