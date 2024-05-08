export const ADD = (item) => {
    return{
        type:"ADD_TO_CART",
        payload:item,
    }
}

export const REMOVE = (item) => {
    return{
        type:"REMOVE_TO_CART",
        payload:item,
    }
}