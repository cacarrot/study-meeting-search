//result reducer
import * as ActionType from '../actions';

const initialState = {
    atnd: [],
    connpass: []
};

function result(state = initialState, action) {
    switch (action.type) {
        case ActionType.GOT_EVENTS:
            return action.response;

        default:
            return state;
    }
}

export default result;