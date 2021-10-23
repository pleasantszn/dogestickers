import React,{useState, useEffect} from 'react'

import Gifs from './Gifs'
import LoaderIcon from './LoaderIcon'
import Search from './Search'
import Pagination from './Pagination'

import NavBar from './NavBar'


const Uploads = () => {
    
    const [sticker, setSticker] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
	const [stickersPerPage] = useState(6)

    let url = "http://localhost:8000/api/stickers/"



    useEffect(() => {
        
    	const getStickers = async () => {
        const stickerFromServer = await fetchStickers()
        	setSticker(stickerFromServer)
            
      	}

      	getStickers()
        
    },[])
    
    
        
    // Fetch Stickers
  
    
    const fetchStickers = async () => {
     
        const res = await fetch(url)
        const data = await res.json()

        return data
    }

    const indexOfLastSticker = currentPage * stickersPerPage
    const indexOfFirstSticker = indexOfLastSticker - stickersPerPage
    const currentStickers = sticker.slice(indexOfFirstSticker,indexOfLastSticker)


    // Change Page 

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <div>
            <NavBar />
          
            
       
        	<section className="hero">
                <div className="container">
                    <h1 className="headline"> Feed</h1>
		        	<div className="search">
		                <Search typeOfSearch = "user uploads"/>
		            </div>
		        </div>
		    </section>
            
            <div className ="gifs-container">
                {sticker.length > 0 ? <Gifs  gifs = {currentStickers} /> : <h2 className="error"> <LoaderIcon h = {100} w = {100}/> </h2> }
                  
            </div>
        </div>
    )
}

export default Uploads
