import _ from 'lodash';

import { 
    resetTypes
} from '../data/resetTypes'

import { 
    TOGGLE_OBJECTIVE_DISABLED
} from '../actions/disabledObjectivesActions';

// Create initial state for each object
var initialState = {}

// Add key for every reset type
resetTypes.forEach((resetType) => {
    initialState[resetType.name] = []
})

const disabledObjectivesReducer = (state = initialState, action) => {
    const newState = _.cloneDeep(state)
    switch (action.type) {
        case TOGGLE_OBJECTIVE_DISABLED:
            // If objective is in disabledObjectives...
            if(newState[action.resetType.name].includes(action.objectiveName)) {
                // ...remove the objective from disabledObjectives
                let index = newState[action.resetType.name].indexOf(action.objectiveName)
                newState[action.resetType.name].splice(index, 1)
            // If objective is not in disabledObjectives...
            } else {
                // ...add objective to disabledObjectives
                newState[action.resetType.name].push(action.objectiveName)
            }
            
            break

        default:
            break
    }

    return newState
}

export default disabledObjectivesReducer