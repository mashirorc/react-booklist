export const wishlistReducer = function (
    state = [],
    action
){
    switch (action.type) {
        case 'ADD_WISHLIST':
            return [
                action.payload,
                ...state.filter(book => {
                    return book.id !== action.payload.id
                })
            ]
        case 'DEL_WISHLIST':
            return state.filter(book => {
                return book.id !== action.payload
            })
        default:
            return state
    }
}