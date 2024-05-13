const initial_state = {
    cartList : [] ,
    wishList : []
}

export const cartreducer = (state=initial_state,action) => {
    switch (action.type) {
        case "ADD_TO_CART" : return {
            ...state,
            cartList:[...state.cartList,action.payload]
        }
        case "REMOVE_TO_CART" : {
            state.cartList = state.cartList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                cartList:[...state.cartList]
            }
        }
        case "ADD_TO_WISHLIST" : return {
            ...state,
            wishList:[...state.wishList,action.payload]
        }
        case "REMOVE_TO_WISHLIST" : {
            state.wishList = state.wishList.filter((data)=>data.id !== action.payload)
            return {
                ...state,
                wishList:[...state.wishList]
            }
        }
        default : return state;
    }
}