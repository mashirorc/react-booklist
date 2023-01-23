import './WishItem.css'
import { useDispatch } from 'react-redux'
import wishlistAction from '../../../action/wishlistAction'

export default function WishItem(props){
    const {id, title} = props
    const dispatch = useDispatch()
    return (
        <div className="wishitem">
            <div className="wishitem__title">{title}</div>
            <div className="wishitem__delete-button" onClick={()=>dispatch(wishlistAction.removeFromWishList(id))}><button>delete</button></div>
        </div>
    )
}