import { combineReducers } from 'redux';

export const counterApp = function (state={counter:0},action){
    switch(action.type){
        case 'INC':{
            return {
                ...state,
                counter: state.counter+1
            };
        }
        case 'DEC':{
            return state.counter-1;
        }
        default: return state;
    }

}

