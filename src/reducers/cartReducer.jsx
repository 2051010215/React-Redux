// import { CART_ADD_NEW, CART_REMOVE } from "../actions/cartAction"


// export const cartReducer = (state = { cartList: [] }, action) => {
//     switch (action.type) {
//         case CART_ADD_NEW:
//             const productInCart = state.cartList.find((p) => p.id === action.payload.id)
//             if (!productInCart) {
//                 return {
//                     ...state,
//                     cartList: [action.payload, ...state.cartList]
//                 }
//                 //Kiểm tra sản phẩm có trong giỏ hàng hay chưa nếu chưa thì 
//                 //cập nhật lại cartList bằng cách sao chép toàn bộ state cũ 
//                 //và thêm vào đầu mảng 1 sản phẩm được gửi lên từ action.payload
//             }
//             else {
//                 const newCart = [...state.cartList]
//                 const cartItemIndex = newCart.findIndex((itemIndex) => itemIndex.id === action.payload.id)
//                 if (newCart[cartItemIndex].quantity === undefined) {
//                     newCart[cartItemIndex].quantity = 2
//                 } else {
//                     newCart[cartItemIndex].quantity = newCart[cartItemIndex].quantity + 1
//                 }

//                 return {
//                     cartList: newCart
//                 }
//             }
//         case CART_REMOVE:
//             const newCart = [...state.cartList]
//             const cartItemIndex = newCart.findIndex((itemIndex) => itemIndex.id === action.payload.id)
//             newCart.splice(cartItemIndex, 1)
//             return {
//                 cartList: newCart
//             }

//         default:
//             return state
//     }
// }




// cartReducer.js sử dụng redux toolkit
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUsersFromApi } from '../configs/apis';


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const users = await fetchUsersFromApi();
        return users;
    } catch (error) {
        throw error;
    }
});

export const cartSlice = createSlice({
    name: 'cart',
    initialState: { cartList: [], data: [], status: 'idle', error: null },
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.cartList.find((p) => p.id === action.payload.id);
            if (!productInCart) {
                state.cartList.unshift(action.payload);
            } else {
                const cartItemIndex = state.cartList.findIndex((itemIndex) => itemIndex.id === action.payload.id);
                if (state.cartList[cartItemIndex].quantity === undefined) {
                    state.cartList[cartItemIndex].quantity = 2;
                } else {
                    state.cartList[cartItemIndex].quantity += 1;
                }
            }
        },
        removeFromCart: (state, action) => {
            const cartItemIndex = state.cartList.findIndex((itemIndex) => itemIndex.id === action.payload.id);
            state.cartList.splice(cartItemIndex, 1);
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data.push(action.payload);    
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

