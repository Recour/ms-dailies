import _ from 'lodash';
import moment from 'moment'

import { 
    SET_CURRENT_TIME
} from '../actions/timeActions'

var initialStateTime = { 
    currentTime: new moment.utc()
}

const timeReducer = (state = initialStateTime, action) => {
    const newState = _.cloneDeep(state)
    switch(action.type) {
        case SET_CURRENT_TIME:
            newState.currentTime = action.time
            break
        default:
            break
    }

    return newState
}

export default timeReducer