import React,{useState, useEffect} from 'react'
import GifSearchResult from './GifSearchResult'
import StickerSearchResult from './StickerSearchResult'
import {ReactComponent as UsersIcon} from '../Assets/Images/users.svg'
import Search from './Search'
import Feed from './Feed'
import NavBar from './NavBar'



const SearchResult = ({match}) => {
    

    let query = match.params.search
    const [stickerActive, setStickerActive] = useState('switch')
    const [gifActive, setGifActive] = useState('switch-active')
    const [feedActive, setFeedActive] = useState('switch')
    const [content, setContent]    = useState(<GifSearchResult keyword = {query} />)
    function changeActivetoSticker(){
        setGifActive('switch')
        setFeedActive('switch')
        setStickerActive('switch-active')  
        setContent(<StickerSearchResult keyword = {query}/>) 
        
    }

    function changeActivetoGif(){
        setGifActive('switch-active')
        setStickerActive('switch') 
        setFeedActive('switch')
        setContent(<GifSearchResult keyword = {query} />)
    }
    function changeActivetoFeed(){
        setFeedActive('switch-active')
        setStickerActive('switch') 
        setGifActive('switch')
        setContent(<Feed />)
    }


    return (
    	<div>
            <NavBar />

            
	        <section className="hero">
                <div className="container">
                    <h1 className="headline"> Search Result</h1>
		        	<div className="search">
		                <Search typeOfSearch = "user uploads" value = {query}/>
		            </div>
		        </div>
		    </section>

		    <section className="trending">

                <div className="container">
                    <div className = "toogle-btns">
                        
                        <button className={gifActive} onClick = {changeActivetoGif} type="submit"> Gifs </button>
                        <button className={stickerActive} onClick = {changeActivetoSticker} type="submit"> Stickers </button>

                    </div>
                    
                    
                </div>
                {content}
            </section>
	    </div>
    )
}

export default SearchResult
 
// <button className={feedActive} type="submit" onClick = {changeActivetoFeed}> Feed</button>