import _ from 'lodash';

import { 
    resetTypes
} from '../data/resetTypes'

import { 
    TOGGLE_OBJECTIVE_COMPLETED,
    RESET_ALL_COMPLETED_OBJECTIVES
} from '../actions/completedObjectivesActions';

// Create initial state for each object
var initialState = {}

// Add key for every reset type
resetTypes.forEach((resetType) => {
    initialState[resetType.name] = []
})

const completedObjectivesReducer = (state = initialState, action) => {
    const newState = _.cloneDeep(state)
    switch (action.type) {
        case TOGGLE_OBJECTIVE_COMPLETED:
            // If objective is in completedObjectives...
            if(newState[action.resetType.name].includes(action.objectiveName)) {
                // ...remove the objective from completedObjectives
                let index = newState[action.resetType.name].indexOf(action.objectiveName)
                newState[action.resetType.name].splice(index, 1)
            // If objective is not in completedObjectives...
            } else {
                // ...add objective to completedObjectives
                newState[action.resetType.name].push(action.objectiveName)
            }
            
            break

        case RESET_ALL_COMPLETED_OBJECTIVES:
            newState[action.resetType.name] = []
            break

        default:
            break
    }

    return newState
}

export default completedObjectivesReducer