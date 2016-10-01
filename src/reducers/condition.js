//condition reducer
import * as ActionType from '../actions';
import { DateUtil } from '../util';

const initialState = {
    date: DateUtil.today('YYYYMMDD'),
    keyword: '',
};

function condition(state = initialState, action) {
    switch (action.type) {
        case ActionType.CHANGE_DATE:
            return Object.assign(state, {
                date: action.date
            });

        case ActionType.CHANGE_KEYWORD:
            return Object.assign(state, {
                keyword: action.keyword
            });

        default:
            return state;
    }
}

export default condition;
