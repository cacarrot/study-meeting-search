import {
    combineReducers
} from 'redux';
import result from './result';
import condition from './condition';

const rootReducer = combineReducers({
    condition,
    result
});

export default rootReducer;
