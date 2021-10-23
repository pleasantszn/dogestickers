import React,{useState, useEffect} from 'react'

import Gifs from './Gifs'
import LoaderIcon from './LoaderIcon'
import Search from './Search'
import Pagination from './Pagination'



const Feed = () => {
    

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
            
            <div className ="gifs-container">
                {sticker.length > 0 ? <Gifs  gifs = {currentStickers} /> : <h2 className="error"> <LoaderIcon h = {100} w = {100}/> </h2> }
                  
            </div>
        </div>
    )
}

export default Feed
