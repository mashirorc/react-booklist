import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom'

function Searchbar (){

    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchText.trim() === "") {
            return;
          } else {
            navigate(`/${searchText}/1`)
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