import React from 'react'
import Sticker from './Sticker'


const Gifs = ({gifs}) => {
    return (

    	
    	
        <>
            <ul className="items">
                
                {gifs.map(gif => <Sticker key = {gif.id} item={gif}/>)}
                
            </ul>
        </>
    )
}

export default Gifs
