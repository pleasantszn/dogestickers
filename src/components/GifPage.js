/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from 'react'
import Gifs from './Gifs'
import LoaderIcon from './LoaderIcon'


const GifPage = () => {
    
    const {REACT_APP_API_KEY} = process.env;
    const [gif, setgif] = useState([])

    
    const apiKey = "JKCzO8VOoWhPHVmt56khpQykkyINElV8"
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=20`
   

    useEffect(() => {
        
        const getgifs = async () => {
            const gifFromServer = await fetchgifs()
            setgif(gifFromServer)
        }
        
        getgifs()
        
        
        
        
    },[])
    
    // Fetch gifs
    const fetchgifs = async () => {
       
        const res = await fetch(url)
        const response = await res.json()
        const data = await response.data
        
        console.log(data)

        return data
                // gLcHMQjSX78zvfstt3
        
        
    }

  return (
    <div>
     <div className ="gifs-container">
        {gif.length > 0 ? <Gifs  gifs = {gif} /> : <h2 className="error"> <LoaderIcon h = {100} w = {100}/> </h2> }    
     </div>
    
    </div>
  )
}

export default GifPage
