const removeFromWishList = (id) => {
    return {
        type: "DEL_WISHLIST",
        payload: id
    }
}

const addToWishList = (id, title) => {
    return {
        type: "ADD_WISHLIST",
        payload: {id, title}
    }
}

const wishlistActions = {removeFromWishList, addToWishList}

export default wishlistActions