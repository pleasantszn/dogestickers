/* eslint-disable react-hooks/exhaustive-deps */
import React , {useState, useEffect} from 'react'
import { saveAs } from 'file-saver'
import Footer from './Footer'
import LoaderIcon from './LoaderIcon'

// srZ56NfEPyVkUdJbU

const StickerDetail = ({match}) => {

    let id = match.params.id

    const [sticker, setSticker] = useState({})
    const [loading, setLoading] = useState(false)
    
    const apiKey = "JKCzO8VOoWhPHVmt56khpQykkyINElV8"
    const url = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
 
    useEffect(() => {
        
        
        const getStickers = async () => {
            const stickerFromServer = await fetchStickers()
            setSticker(stickerFromServer)
            setLoading(false)
        }
        
        getStickers()
        
        
        
    },[])

    
    
    // Fetch Stickers
    const fetchStickers = async () => {
        setLoading(true)
        const res = await fetch(url)
        const response = await res.json()
        const data = await response.data
        
        
        
        return data
        
        
    }

    if (loading === true || Object.keys(sticker).length === 0 ){
        return (
            <>
                <div className="load"><LoaderIcon h = {100} w = {100}/></div>
                <Footer />
            </>
        )

    }
    
    const copyLink = () => { 
        let link =  sticker.bitly_url
        
        let inputElem = document.createElement('input');
        inputElem.setAttribute('value', link);
        document.body.appendChild(inputElem);

        inputElem.select();
        inputElem.setSelectionRange(0,9999);
        document.execCommand('copy');
        
        inputElem.parentNode.removeChild(inputElem)

        alert('Link Copied! 😎 ')
    }

    const download = () => {
        let imgPath = sticker.images.downsized.url
        
        let fileName = sticker.title
        saveAs(imgPath,fileName)
    }
    
    return (
        <div>
            
            <ul className="stickers-detail">
                <li className='sticker'>
                    <img src={sticker.images.downsized.url} alt={sticker.title} className='sticker-img'></img>
                    <div className="card-container">
                        
                        <h3>{sticker.title}</h3>
                        <div className='btns'>
                            <button className='copy' onClick={copyLink}>Copy Link</button>
                            <button className='download' onClick={download}>Download</button>

                        </div>


                    </div>
                    
                </li>  
            </ul>  
            <Footer />
        </div>
    )
}

export default StickerDetail
