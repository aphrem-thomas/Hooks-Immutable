
function rootReducer(state={counter:0},action){
    switch(action.type){
        case 'INC':{
            return state.counter+1;
        }
        case 'DEC':{
            return state.counter-1;
        }
        default: return state;
    }

}