/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import Gifs from './Gifs'
import LoaderIcon from './LoaderIcon'

const StickerPage = () => {
    
    const {REACT_APP_API_KEY} = process.env;
    const [sticker, setSticker] = useState([])
        
    const apiKey = "JKCzO8VOoWhPHVmt56khpQykkyINElV8"
    const url = `https://api.giphy.com/v1/stickers/trending?api_key=${apiKey}&limit=20`
   

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
        console.log(response)
        
        
        return data
        // gLcHMQjSX78zvfstt3
        
        
    }
    return (
        <>
            <div className ="gifs-container">
                {sticker.length > 0 ? <Gifs  gifs = {sticker} /> : <h2 className="error"> <LoaderIcon h = {100} w = {100}/> </h2> }    
            </div>

        
        </>
    )
}

export default StickerPage
