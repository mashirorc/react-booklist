import React, { useState } from "react";
import { useDispatch } from "react-redux"

function Searchbar (){

    const [searchText, setSearchText] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchText.trim() === "") {
            return;
          } else {
            // make api call and save to context
            fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchText}&maxResults=20`)
            .then(res => res.json())
            .then(data => dispatch({type: 'SET_BOOKS', payload: data.items}))
          }
    }

    const handleInput = (e) => {
        setSearchText(e.target.value)
    }

    return (
            <div className="searchbar">
                <form>
                    <input value={searchText} onChange={handleInput}/>
                    <input type="submit" onClick={handleSubmit}/>
                </form>
            </div>
        )
}

export default Searchbar