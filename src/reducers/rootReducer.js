import { combineReducers } from 'redux';
import {List,Map} from 'immutable';

export const counterApp = function (state=Map({counter:0}),action){
    switch(action.type){
        case 'INC':{
            // return {
            //     ...state,
            //     counter: state.counter+1
            // };
            //console.log(state.getIn(['counter']))
            return state.set('counter',state.getIn(['counter'])+1)
        };break;
        case 'DEC':{
            return state.counter-1;
        };break;
        default: return state;
    }

}

