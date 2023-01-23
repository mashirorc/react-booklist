import './BookItem.css'
import { useDispatch } from 'react-redux'
import { addToWishList } from '../../../reducer/wishlistSlice'
import React from 'react'

type AppProps = {
    id: string,
    info: {
        imageLinks: {thumbnail: string}
        title: string
        authors: string[]
        publisher: string
        publishedDate: string
        description: string
    }

}

export default function BookItem (props: AppProps){
    const {id, info} = props
    const dispatch = useDispatch()
    return (
        <li className="bookitem" onClick={() => dispatch(addToWishList({id, title:info.title}))}>
            <div className='bookitem__img'>
                <img src={info.imageLinks?.thumbnail} alt={info.title}/>
            </div>
            <div className='bookitem__info'>
                <h1>{info.title}</h1>
                <p><b>Authors:</b> {info.authors ? info.authors.join(", "):"Unknown"}</p>
                <p><b>Publisher:</b> {info.publisher ? info.publisher : "Unknown"}</p>
                <p><b>Published Date:</b> {info.publishedDate ? info.publishedDate : "Unknown"}</p>
                <p><b>Description:</b> {info.description ? info.description : "Unknown"}</p>
            </div>
        </li>
    )
}

