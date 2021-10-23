import React from 'react'
import Sticker from './Sticker'

const Stickers = ({stickers}) => {
    return (
        <>
            <ul className="stickers">
                
                {stickers.map(sticker => <Sticker key = {sticker.id} sticker={sticker}/>)}
                
            </ul>
        </>
    )
}

export default Stickers
