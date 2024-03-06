// export const CART_ADD_NEW = "CART_ADD"
// export const CART_REMOVE = "CART_REMOVE"


// export const addToCart = (productId) => async (dispatch, getState) => {
//     dispatch({
//         type: CART_ADD_NEW,
//         payload: {
//             id: productId,
//         }
//     })
// }


// export const removeFromCart = (productId) => async (dispatch, getState) => {
//     dispatch({
//         type: CART_REMOVE,
//         payload: {
//             id: productId,
//         }
//     })
// }



// carAction sử dụng redux toolkit
import { addToCart, removeFromCart } from '../reducers/cartReducer';

export const addProductToCart = (productId) => (dispatch) => {
    dispatch(addToCart({ id: productId }));
};

export const removeProductFromCart = (productId) => (dispatch) => {
    dispatch(removeFromCart({ id: productId }));
};
