const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (newproduct) =>{
    console.log("in action add pid:")
    return {
        type: ADD_TO_CART,
        product: newproduct
    }
}

export const removeFromCart = (newproduct) =>{
    console.log("in action pid:")
    return {
        type: REMOVE_FROM_CART,
        product: newproduct
    }
}