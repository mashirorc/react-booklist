import './WishItem.css'
import { useDispatch } from 'react-redux'
import { deleteFromWishList } from '../../../reducer/wishlistSlice'
import React from 'react'

type compProps = {
    id: string,
    title: string
}
export default function WishItem(props: compProps){
    const {id, title} = props
    const dispatch = useDispatch()
    return (
        <div className="wishitem">
            <div className="wishitem__title">{title}</div>
            <div className="wishitem__delete-button" onClick={()=>dispatch(deleteFromWishList(id))}><button>delete</button></div>
        </div>
    )
}