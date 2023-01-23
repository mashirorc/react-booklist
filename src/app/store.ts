import { configureStore } from "@reduxjs/toolkit";
import booksReducer from '../reducer/booksSlice';
import wishlistReducer from "../reducer/wishlistSlice";

const store = configureStore({
    reducer: {
        books: booksReducer,
        wishlist: wishlistReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store