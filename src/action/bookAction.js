import config from "../config/config"


const searchBooks = (keyword, page) => {
    return (dispatch) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${keyword}&startIndex=${config.booksPerPage * (page - 1)}&maxResults=${config.booksPerPage}`)
        // fetch(`http://localhost:3001/book`)
            .then(res => res.json())
            .then(data => dispatch({type: 'SET_BOOKS', payload: data}))
    }
}

const bookActions = { searchBooks }

export default bookActions