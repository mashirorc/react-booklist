import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Searchbar (){

    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        if (searchText.trim() === "") {
            return;
        } else {
            navigate(`/${searchText}/1`)
        }
        event.preventDefault()
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value)
    }

    return (
            <div className="searchbar">
                <form onSubmit={handleSubmit}>
                    <input value={searchText} onChange={handleInput}/>
                    <input type="submit"/>
                </form>
            </div>
        )
}

export default Searchbar