import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import config from '../config/config';

type Book = {
    volumeInfo: { imageLinks: { thumbnail: string; }; title: string; authors: string[]; publisher: string; publishedDate: string; description: string; };
    id: string,
    title: string
}

export interface BooksState {
    items: Book[]
    totalItems: number
}

const initialState: BooksState = {
    items: [],
    totalItems: 0
}

export const searchBooks = createAsyncThunk(
    'books/search',
    async ({keyword, page}:{keyword: string, page: number} ) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${keyword}&startIndex=${config.booksPerPage * (page - 1)}&maxResults=${config.booksPerPage}`)
        return response.json()
    }
)

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<BooksState>) => {
            state.items = action.payload.items
            state.totalItems = action.payload.totalItems
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchBooks.fulfilled, (state, action) => {
                state.items = action.payload.items
                state.totalItems = action.payload.totalItems
            })
    }
})

export const { set } = booksSlice.actions

export default booksSlice.reducer