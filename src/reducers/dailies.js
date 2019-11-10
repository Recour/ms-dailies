import _ from 'lodash';

import data from '../data/data';
import { COMPLETE_DAILY, RESET_DAILY, TOGGLE_DAILY } from '../actions/dailiesActions';

// Create initial state for each object
var initialStateDailies = {}
data.dailies.bosses.forEach((dailyBoss) => {
    initialStateDailies[dailyBoss.name] = { completed: false }
})

const dailies = (state = initialStateDailies, action) => {
    const newState = _.cloneDeep(state)
    switch (action.type) {
        case COMPLETE_DAILY:
            newState[action.daily].completed = true
            break;
        case RESET_DAILY:
            newState[action.daily].completed = false        
            break;
        case TOGGLE_DAILY:
            newState[action.daily].completed = !state[action.daily].completed
            break;
        default:
            break;
    }

    return newState
}

export default dailies