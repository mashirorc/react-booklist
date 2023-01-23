import './BookItem.css'
import { useDispatch } from 'react-redux'
import wishlistActions from '../../../action/wishlistAction'

export default function BookItem (props){
    const {id, info} = props
    const dispatch = useDispatch()
    return (
        <li className="bookitem" onClick={() => dispatch(wishlistActions.addToWishList(id, info.title))}>
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

