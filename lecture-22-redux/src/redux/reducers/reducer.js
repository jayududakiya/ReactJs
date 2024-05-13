const initial_state  = {
    card : [{post:1}]
}


export const cardreducer = (state=initial_state,action) => {
    switch(action.type){
        case "ADD_TO_CART"  : return {
            ...state,card:[...state.    card,action.payload]
        }
        default : return state
        
    }
}