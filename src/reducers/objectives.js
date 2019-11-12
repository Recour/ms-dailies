import _ from 'lodash';

import { objectives } from '../data/objectives';
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
    initialState[resetType.name] = {}
})

// Add keys to all reset types for every objective
objectives.forEach((objective) => {
    initialState[objective.resetType.name][objective.name] = { completed: false }
})

const objectivesReducer = (state = initialState, action) => {
    const newState = _.cloneDeep(state)
    switch (action.type) {
        case TOGGLE_OBJECTIVE:
            newState[action.resetType.name][action.objective].completed = !newState[action.resetType.name][action.objective].completed
            break
        case RESET_ALL_OBJECTIVES:
            Object.keys(newState[action.resetType.name]).forEach((objective) => {
                newState[action.resetType.name][objective].completed = false
            })
            break
        default:
            break
    }

    return newState
}

export default objectivesReducer