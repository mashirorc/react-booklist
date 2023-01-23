import './WishList.css'
import { useSelector } from "react-redux"
import WishItem from './WishItem/WishItem'
import { RootState } from '../../app/store'
import React from 'react'

export default function WishList(){
    const wishlist = useSelector((state: RootState) => state.wishlist)
    return (
    <div className="wishlist">
        <h1>My reading wishlist ({wishlist.length})</h1>
        <ul className="wishlist__content">
                {wishlist.map((book: { id: string; title: string }) => {
                    return <WishItem key={book.id} id={book.id} title={book.title}></WishItem>
                })}
            </ul>
    </div>)
}