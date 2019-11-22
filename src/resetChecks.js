import moment from 'moment'
import { store, persistedState } from './store'
import { resetAllCompletedObjectives } from './actions/objectivesActions'
import { openGlobalSnackbar } from './actions/globalSnackbarActions'

import { getNextResetTime, resetTypes } from './data/resetTypes'

// Check for resets happening while app is open
export const checkForResetsLive = () => {
    let currentTime = moment.utc(store.getState().time.currentTime)
    var previousTime = moment.utc(currentTime).subtract(1, 'second')

    resetTypes.forEach((resetType) => {
        let previousResetTime = getNextResetTime(previousTime, resetType)
        let currentResetTime = getNextResetTime(currentTime, resetType)

        if(previousResetTime.unix() !== currentResetTime.unix()) {
            store.dispatch(resetAllCompletedObjectives(resetType))
            store.dispatch(openGlobalSnackbar(resetType.name + " just happened!"))
        }
    })
}

// Check for resets that happened since last visit
export const checkForResetsSinceLastVisit = () => {
    try {
        // Last visit is currentTime in persisted state
        let lastVisit = moment.utc(persistedState.time.currentTime)

        // Reset objectives for each reset type if necessary
        resetTypes.forEach((resetType) => {
            let lastVisitResetTime = getNextResetTime(lastVisit, resetType)
            let currentTime = moment.utc(store.getState().time.currentTime)

            if(lastVisitResetTime.isBefore(currentTime)) {
                store.dispatch(resetAllCompletedObjectives(resetType))
                store.dispatch(openGlobalSnackbar(resetType.name + " happened while you were gone!"))
            }
        })
    }
    catch {
        
    }
}