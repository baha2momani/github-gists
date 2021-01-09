import React, {useState} from 'react';
import './style.css'

export const Search = ({onSubmit}) => {
    const [query, setQuery] = useState("");

    const onInputChange = (e) => {
        setQuery(e.target.value)
    }

    const onSearchSubmit = () => {
        if(!query) return;

        onSubmit(query)
    }

    return <div className='search-container'>
        <input onChange={onInputChange}/>
        <button type="button" className="btn btn-primary ms-2" onClick={onSearchSubmit}>Go</button>

    </div>
}
export default Search