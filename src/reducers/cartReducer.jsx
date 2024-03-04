import { CART_ADD_NEW, CART_REMOVE } from "../actions/cartAction"


export const cartReducer = (state = { cartList: [] }, action) => {
    switch (action.type) {
        case CART_ADD_NEW:
            const productInCart = state.cartList.find((p) => p.id === action.payload.id)
            if (!productInCart) {
                return {
                    ...state,
                    cartList: [action.payload, ...state.cartList]
                }
            }
            else {
                const newCart = state.cartList
                const cartItemIndex = newCart.findIndex((itemIndex) => itemIndex.id === action.payload.id)
                if (newCart[cartItemIndex].quantity === undefined) {
                    newCart[cartItemIndex].quantity = 2
                } else {
                    newCart[cartItemIndex].quantity = newCart[cartItemIndex].quantity + 1
                }

                return {
                    cartList: [...newCart]
                }
            }
        case CART_REMOVE:
            const newCart = state.cartList
            const cartItemIndex = newCart.findIndex((itemIndex) => itemIndex.id === action.payload.id)
            newCart.splice(cartItemIndex, 1)
            return {
                cartList: [...newCart]
            }

        default:
            return state
    }
}