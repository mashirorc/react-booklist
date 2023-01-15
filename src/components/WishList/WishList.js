import './WishList.css'
import { useSelector } from "react-redux"
import WishItem from './WishItem/WishItem'

export default function WishList(){
    const wishlist = useSelector(state => state.wishlist)
    return (
    <div className="wishlist">
        <h1>My reading wishlist ({wishlist.length})</h1>
        <ul className="wishlist__content">
                {wishlist.map(book => {
                    return <WishItem key={book.id} id={book.id} title={book.title}></WishItem>
                })}
            </ul>
    </div>)
}