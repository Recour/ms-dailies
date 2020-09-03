import moment from 'moment'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { loadState, saveState } from './localStorage'
import { setCurrentTime } from './actions/timeActions'
import { checkForResetsLive, checkForResetsSinceLastVisit } from './resetChecks'

// Get state from localStorage if it is saved
export const persistedState = loadState()

export const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Save state in localStorage on window close
window.onbeforeunload = (() => {
    saveState(store.getState())
})

store.subscribe(() => {
    saveState(store.getState())
})

// Loop every second
const setCurrentTimeLoop = () => {
    let start = moment.utc()

    store.dispatch(setCurrentTime(new moment.utc()))
    checkForResetsLive()

    let stop = moment.utc()
    let delay = stop - start

    setTimeout(setCurrentTimeLoop, 1000 - delay)
}

setCurrentTimeLoop()
checkForResetsSinceLastVisit()
