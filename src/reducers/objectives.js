import _ from 'lodash';

import { 
    resetTypes
} from '../data/resetTypes'
import { 
    TOGGLE_OBJECTIVE,
    RESET_ALL_OBJECTIVES
} from '../actions/objectivesActions';

// Create initial state for each object
var initialState = {}

// Add key for every reset type
resetTypes.forEach((resetType) => {
    initialState[resetType.name] = { 
        completedObjectives: []
    }
})

const objectivesReducer = (state = initialState, action) => {
    const newState = _.cloneDeep(state)
    switch (action.type) {
        case TOGGLE_OBJECTIVE:
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

        case RESET_ALL_OBJECTIVES:
            newState[action.resetType.name].completedObjectives = []
            break

        default:
            break
    }

    return newState
}

export default objectivesReducer