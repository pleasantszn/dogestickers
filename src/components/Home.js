import React , {useState, useEffect}  from 'react'
import Search from './Search'

// import Upload from './Upload'

import Trending from './Trending'
import Creators from './Creators'
import { Link} from 'react-router-dom'
import NavBar from './NavBar'


const Home = () => {

     
    
    return (
        <div>
            <NavBar />
            <section className="hero">
                <div className="container">
                    <h1 className="headline"> DogeStickers</h1>

                    <p className="subhead"> Use cool stickers everywhere .</p>
                    <br/>

                    
                    <div className="search">
                        <Search typeOfSearch = "stickers and gifs"/>
                    </div>
                    
                </div>
            </section>
            <Trending />
            <Creators />
        </div>
    )
}

export default Home
