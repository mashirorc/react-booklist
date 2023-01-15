import { booksReducer } from './booksReducer';
import { wishlistReducer } from './wishlistReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    books: booksReducer,
    wishlist: wishlistReducer
})

export default rootReducer