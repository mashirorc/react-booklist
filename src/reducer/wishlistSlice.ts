import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Book = {
    id: string,
    title: string
}
const initialState:Book[] = []

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<Book>)=> {
            return [
                action.payload,
                ...state.filter(book => {
                    return book.id !== action.payload.id
                })
            ]
        },
        deleteFromWishList: (state, action: PayloadAction<string>)=> {
            return state.filter(book => {
                return book.id !== action.payload
            })
        }

    }
})

export const { addToWishList, deleteFromWishList} = wishlistSlice.actions;

export default wishlistSlice.reducer