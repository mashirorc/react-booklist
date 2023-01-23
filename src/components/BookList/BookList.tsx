import React, { useEffect } from "react";
import { useSelector } from "react-redux"
import BookItem from "./BookItem/BookItem";
import config from "../../config/config";
import { useDispatch } from "react-redux";
import { searchBooks } from "../../reducer/booksSlice";
import { useParams, useNavigate } from 'react-router-dom'
import './BookList.css'
import { RootState, AppDispatch } from "../../app/store";

export default function Booklist(){
    const books = useSelector((state: RootState) => state.books.items)
    const totalItems = useSelector((state: RootState) => state.books.totalItems)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const params = useParams()

    const keyword = params.keyword || ''
    const page = parseInt(params.page || '1')

    useEffect(() => {
        if (keyword !== '') dispatch(searchBooks({keyword, page}))
    }, [page,keyword])

    const hasNext = () => {
        return config.booksPerPage * page < totalItems
    }
    
    if (typeof params.keyword !== 'string') return <div className="booklist"></div>
    return (
        <div className="booklist">
            <ul className="booklist__content">
                {books?.map((book) => {
                    return <BookItem key={book.id} id={book.id} info={book.volumeInfo}></BookItem>
                })}
            </ul>
            {page !== 1 ? <button onClick={() => navigate(`/${keyword}/${page - 1}`)}>Prev</button> : null}
            {hasNext() ? <button onClick={() => navigate(`/${keyword}/${page + 1}`)}>Next</button>: null}
        </div>
    )
}
