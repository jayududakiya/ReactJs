const initial_state = {
    cartList : [] ,
    wishList : []
}

export const cartReducer = (state=initial_state,action) => {
    switch (action.type) {
        case "ADD_TO_CART" : { 
            let FindCart = state.cartList.find(data => data.id == action.payload.id)
            if(FindCart == undefined){
                return {
                ...state,
                cartList:[...state.cartList,action.payload]}
            }else{
                return state
            }
        }
        case "REMOVE_TO_CART" : {
            state.cartList = state.cartList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                cartList:[...state.cartList]
            }
        }
        default : return state;
    }
}


export const wishReducer = (state=initial_state,action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST" :{
            let FindWish = state.wishList.find(data => data.id == action.payload.id)  
            if(FindWish == undefined){ 
                return {
                ...state,
                wishList:[...state.wishList,action.payload]}
            }else{
                return state
            }
        }
        case "REMOVE_TO_WISHLIST" : {
            state.wishList = state.wishList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                wishList:[...state.wishList]
            }
        }
        default : return state ;
    }
}