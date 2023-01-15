import React from "react";
import { useSelector } from "react-redux"
import BookItem from "./BookItem/BookItem";
import Searchbar from "../Searchbar";
import './BookList.css'

export default function Booklist(){
    const books = useSelector(state => state.books)

    const handleClick = (id) => {
        console.log(id)
    }
    
    return (
        <div className="booklist">
            <Searchbar></Searchbar>
            <ul className="booklist__content">
                {books.map(book => {
                    return <BookItem key={book.id} id={book.id} info={book.volumeInfo} addToWish={handleClick}></BookItem>
                })}
            </ul>
        </div>
    )
}
