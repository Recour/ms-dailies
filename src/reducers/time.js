import _ from 'lodash';
import moment from 'moment'

import { 
    SET_CURRENT_TIME, 
    SET_LAST_VISIT
} from '../actions/timeActions'

var initialStateTime = { 
    currentTime: new moment.utc(),
    lastVisit: new moment.utc()
}

const time = (state = initialStateTime, action) => {
    const newState = _.cloneDeep(state)
    switch(action.type) {
        case SET_CURRENT_TIME:
            newState.currentTime = action.time
            break
        case SET_LAST_VISIT:
            newState.lastVisit = action.time
            break
        default:
            break
    }

    return newState
}

export default time