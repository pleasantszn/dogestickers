/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import Gifs from './Gifs'
import Footer from './Footer'
import LoaderIcon from './LoaderIcon'
import Search from './Search'
import Pagination from './Pagination'


const GifSearchResult = ({keyword}) => {

    const {REACT_APP_API_KEY} = process.env;
    const [sticker, setSticker] = useState([])
    const apiKey = "JKCzO8VOoWhPHVmt56khpQykkyINElV8"
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=24`
   
    
    const [currentPage, setCurrentPage] = useState(1)
    const [stickersPerPage] = useState(6)

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
        const response = await res.json()
        const data = await response.data
    
      
        return data
    
        
    }

    // Get current sticker
    const indexOfLastSticker = currentPage * stickersPerPage
    const indexOfFirstSticker = indexOfLastSticker - stickersPerPage
    const currentStickers = sticker.slice(indexOfFirstSticker,indexOfLastSticker)


    // Change Page 

    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <div>
        	{sticker.length > 0 ? <Gifs  gifs = {currentStickers} /> : <h2 className="error"> <LoaderIcon h = {100} w = {100}/> </h2> }    

            <Pagination stickersPerPage = {stickersPerPage} totalStickers = {sticker.length} paginate={paginate}/>

            
        </div>
    )
}

export default GifSearchResult
