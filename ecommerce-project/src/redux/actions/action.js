export const ADD_CART = (item) => {
    return {
        type:"ADD_TO_CART",
        payload:item
    }
}
export const ADD_WISHLIST = (item) => {
    return {
        type:"ADD_TO_WISHLIST",
        payload:item
    }
}

export const REMOVE_WISHLIST = (id) => {
    return {
        type:"REMOVE_TO_WISHLIST",
        payload:id
    }
}


export const REMOVE_CART = (id) => {
    return {
        type:"REMOVE_TO_CART",
        payload:id
    }
}