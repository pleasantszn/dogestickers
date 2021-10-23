import React,{useState} from 'react'
import GifPage from './GifPage'
import StickerPage from './StickerPage'
import Feed from './Feed'

const Trending = () => {


    const [stickerActive, setStickerActive] = useState('switch')
    const [gifActive, setGifActive] = useState('switch-active')
    const [feedActive, setFeedActive] = useState('switch')
    const [content, setContent]    = useState(<GifPage />)
    function changeActivetoSticker(){
        setGifActive('switch')
        setFeedActive('switch')
        setStickerActive('switch-active')  
        setContent(<StickerPage />) 
        
    }

    function changeActivetoGif(){
        setGifActive('switch-active')
        setStickerActive('switch') 
        setFeedActive('switch')
        setContent(<GifPage />)
    }
    function changeActivetoFeed(){
        setFeedActive('switch-active')
        setStickerActive('switch') 
        setGifActive('switch')
        setContent(<Feed />)
    }

    return (
        <div>
            
            <section className="trending">

                <div className="container">
                    <h1 className="trending-text"> Trending 🚀</h1>
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

export default Trending

// <button className={feedActive} type="submit" onClick = {changeActivetoFeed}> Feed</button>