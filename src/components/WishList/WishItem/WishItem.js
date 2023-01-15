import './WishItem.css'
import { useDispatch } from 'react-redux'

export default function WishItem(props){
    const {id, title} = props
    const dispatch = useDispatch()
    return (
        <div className="wishitem">
            <div className="wishitem__title">{title}</div>
            <div className="wishitem__delete-button" onClick={()=>dispatch({type: "DEL_WISHLIST", payload: id})}><button>delete</button></div>
        </div>
    )
}