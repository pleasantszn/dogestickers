/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import Stickers from './Stickers'
import Footer from './Footer'
import Search from './Search'
import LoaderIcon from './LoaderIcon'
import Pagination from './Pagination'

const Libary = () => {
    
    
    const [sticker, setSticker] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [stickersPerPage] = useState(3)
    
    const apiKey = "8t04KfInB5TLdOGwm8EnbiJAinswRhJV"
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
   

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
        // gLcHMQjSX78zvfstt3
        
        
    }
    
    // Get current sticker
    const indexOfLastSticker = currentPage * stickersPerPage
    const indexOfFirstSticker = indexOfLastSticker - stickersPerPage
    const currentStickers = sticker.slice(indexOfFirstSticker,indexOfLastSticker)


    // Change Page 

    const paginate = pageNumber => setCurrentPage(pageNumber) 
    return (
        <>
            <div className ="lib-container">
                <div className='lib-search'>
                    <Search />
                    
                </div>

                {sticker.length > 0 ? <Stickers  stickers = {currentStickers}/> : <h2 className="error"> <LoaderIcon h = {100} w = {100}/> </h2> }
                
            </div>

            <Pagination stickersPerPage = {stickersPerPage} totalStickers = {sticker.length} paginate={paginate}/>
            <Footer />
        </>
    )
}

export default Libary
