import { ADD_VALUE, DED_VALUE } from './actions';
import { combineReducers } from 'redux';

function inputCounterFunc(state = { value : 0 }, action){
    switch(action.type){
        case ADD_VALUE:
            return Object.assign({}, state, {
                action: action.type,
                value : state.value + 1
            })
        case DED_VALUE:
            return Object.assign({}, state, {
                action: action.type,
                value : state.value - 1
            })
        default:
            return state;
    }
}

// const inputCounter = combineReducers({
//     inputCounterFunc
// });

export default inputCounterFunc;