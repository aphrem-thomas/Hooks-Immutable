const INITIAL_STATE ={
    counter:1
}

export function rootReducer(state=INITIAL_STATE,action){
    switch (action.type) {
        case 'INC_COUNTER':
            return Object.assign({},state,{counter:state.counter+1})
            break;
    
        default:
            return state;
            break;
    }
}