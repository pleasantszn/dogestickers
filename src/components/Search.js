import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'




const Search = ({value,typeOfSearch}) => {
   
    
    let type = typeOfSearch
    
    const [search, setSearch] = useState(value);
    const [query, setQuery] = useState('');
    const [forward, setForward] = useState(false);

    const changeHandler = (event) => {
        setSearch(event.target.value);
        
    };

    
    const getSearch  = e => {
        e.preventDefault();
        setQuery(search)
        // setSearch('')
        setForward(true)

        

    }


 
    let urlPath = `/search/${query}`

    var val = `Search for ${type} ` 

    return (
        <>
            
            <form className = 'add-form' onSubmit = {getSearch}>
                <input type="text" id="search" value = {search} onChange={changeHandler} placeholder={val} name="search"/>

                {forward && (
                    <Redirect to = {urlPath} />
                )}
                
            </form>

            
        </>
    )

   
}

Search.defaultProps = {
    value : ''
}


export default Search
