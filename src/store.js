import moment from 'moment'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { loadState, saveState } from './localStorage'
import { setCurrentTime } from './actions/timeActions'
import { resetAllObjectives } from './actions/objectivesActions'
import { 
    getNextResetTime,
    resetTypes
} from './data/resetTypes'

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

const checkForResetsLive = () => {
    let currentTime = moment.utc(store.getState().time.currentTime)
    var previousTime = moment.utc(currentTime).subtract(1, 'second')

    resetTypes.forEach((resetType) => {
        let previousResetTime = getNextResetTime(previousTime, resetType)
        let currentResetTime = getNextResetTime(currentTime, resetType)

        if(previousResetTime.unix() !== currentResetTime.unix()) {
            store.dispatch(resetAllObjectives(resetType))
        }
    })
}

const setCurrentTimeLoop = () => {
    let start = moment.utc()
    store.dispatch(setCurrentTime(new moment.utc()))
    checkForResetsLive()
    let stop = moment.utc()
    let delay = stop - start

    setTimeout(setCurrentTimeLoop, 1000 - delay)
}

setCurrentTimeLoop()

const checkForResetsSinceLastVisit = () => {
    // Last visit is currentTime in persisted state
    let lastVisit = moment.utc(persistedState.time.currentTime)

    // Reset objectives for each reset type if necessary
    resetTypes.forEach((resetType) => {
        let lastVisitResetTime = getNextResetTime(lastVisit, resetType)
        let currentTime = moment.utc(store.getState().time.currentTime)

        if(lastVisitResetTime.isBefore(currentTime)) {
            store.dispatch(resetAllObjectives(resetType))
        }
    })
}

checkForResetsSinceLastVisit()