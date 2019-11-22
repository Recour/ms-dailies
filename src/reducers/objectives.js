import _ from 'lodash';

import { 
    resetTypes
} from '../data/resetTypes'

import { 
    TOGGLE_OBJECTIVE_COMPLETED,
    RESET_ALL_COMPLETED_OBJECTIVES,
    TOGGLE_OBJECTIVE_DISABLED
} from '../actions/objectivesActions';

// Create initial state for each object
var initialState = {}

// Add key for every reset type
resetTypes.forEach((resetType) => {
    initialState[resetType.name] = { 
        completedObjectives: [],
        disabledObjectives: []
    }
})

const objectivesReducer = (state = initialState, action) => {
    const newState = _.cloneDeep(state)
    switch (action.type) {
        case TOGGLE_OBJECTIVE_COMPLETED:
            // If objective is in completedObjectives...
            if(newState[action.resetType.name].completedObjectives.includes(action.objectiveName)) {
                // ...remove the objective from completedObjectives
                let index = newState[action.resetType.name].completedObjectives.indexOf(action.objectiveName)
                newState[action.resetType.name].completedObjectives.splice(index, 1)
            // If objective is not in completedObjectives...
            } else {
                // ...add objective to completedObjectives
                newState[action.resetType.name].completedObjectives.push(action.objectiveName)
            }
            
            break

        case RESET_ALL_COMPLETED_OBJECTIVES:
            newState[action.resetType.name].completedObjectives = []
            break

        case TOGGLE_OBJECTIVE_DISABLED:
            // If objective is in disabledObjectives...
            if(newState[action.resetType.name].disabledObjectives.includes(action.objectiveName)) {
                // ...remove the objective from disabledObjectives
                let index = newState[action.resetType.name].disabledObjectives.indexOf(action.objectiveName)
                newState[action.resetType.name].disabledObjectives.splice(index, 1)
            // If objective is not in disabledObjectives...
            } else {
                // ...add objective to disabledObjectives
                newState[action.resetType.name].disabledObjectives.push(action.objectiveName)
            }
            
            break

        default:
            break
    }

    return newState
}

export default objectivesReducer