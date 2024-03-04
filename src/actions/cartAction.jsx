export const CART_ADD_NEW = "CART_ADD"
export const CART_REMOVE = "CART_REMOVE"


export const addToCart = (productId) => async (dispatch, getState) => {
    dispatch({
        type: CART_ADD_NEW,
        payload: {
            id: productId,
        }
    })

    // localStorage.setItem('ListOrderItems', JSON.stringify(getState().cartItems.cartList))
}


export const removeFromCart = (productId) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE,
        payload: {
            id: productId,
        }
    })

    // localStorage.setItem('ListOrderItems', JSON.stringify(getState().cartItems.cartList))
}