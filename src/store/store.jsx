// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { listAddReducer } from "../reducers/listReducer";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from '@redux-devtools/extension'
// import { cartReducer } from "../reducers/cartReducer";
// import persistReducer from "redux-persist/es/persistReducer";
// import storage from 'redux-persist/lib/storage'
// import persistStore from "redux-persist/es/persistStore";


// const reducer = combineReducers({
//     todoItems: listAddReducer,
//     cartItems: cartReducer
// })

// const middleware = [thunk]

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(
//     persistedReducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store

// export const persistor = persistStore(store)


// store sử dụng redux toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { listAddReducer } from '../reducers/listReducer';
import { cartSlice } from '../reducers/cartReducer';


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    todoItems: listAddReducer,
    cartItems: cartSlice.reducer,
}));

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Không cảnh báo về non-serializable data
        }),
});

export const persistor = persistStore(store);
export default store;
