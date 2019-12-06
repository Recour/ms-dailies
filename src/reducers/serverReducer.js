import _ from 'lodash';
import {servers} from "../data/servers";

import {
    SET_SERVER
} from '../actions/serverActions'

var initialStateServer = {
    server: servers.GMS
}

const serverReducer = (state = initialStateServer, action) => {
    const newState = _.cloneDeep(state)
    switch(action.type) {
        case SET_SERVER:
            newState.server = action.server;
            break;
        default:
            break;
    }

    return newState
}

export default serverReducer;
