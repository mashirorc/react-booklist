import './BookItem.css'
import { useDispatch } from 'react-redux'

export default function BookItem (props){
    const {id, addToWish, info} = props
    const dispatch = useDispatch()
    return (
        <li className="bookitem" onClick={() => dispatch({type: "ADD_WISHLIST", payload: {id, title: info.title}})}>
            <div className='bookitem__img'>
                <img src={info.imageLinks?.thumbnail}/>
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

