import { applyMiddleware, combineReducers, createStore } from "redux";
import { listAddReducer } from "../reducers/listReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension'
import { cartReducer } from "../reducers/cartReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";


const reducer = combineReducers({
    todoItems: listAddReducer,
    cartItems: cartReducer
})

const middleware = [thunk]

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

//load data từ localStorage
// const todoItemsFromStorage = localStorage.getItem('ListItems') ? JSON.parse(localStorage.getItem('ListItems')) : []
// const cartItemsFromStorage = localStorage.getItem('ListOrderItems') ? JSON.parse(localStorage.getItem('ListOrderItems')) : []

//gán data từ localStorage vào initialState
// const initialState = {
//     todoItems: { todoList: todoItemsFromStorage },
//     cartItems: { cartList: cartItemsFromStorage }
// }

const store = createStore(
    // reducer,
    // initialState,
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

export const persistor = persistStore(store)
