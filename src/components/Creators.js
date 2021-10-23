import React from 'react'
import twitterimage from '../Assets/Images/twitter.svg'
import instagramimage from '../Assets/Images/instagram.svg'
import facebookimage from '../Assets/Images/facebook.svg'


const Creators = () => {
    return (
        <section className="creators">
        	<h1 className="creators-headline">#Doge4Creators ⚡</h1> 

        	<div className="container">
            
                <blockquote><strong>We</strong> have partnered with several content creators to deliver these assests for free.<br></br> Search. Explore. Download. Have Fun. </blockquote>  
                <h4> - Pleasant Tech<br></br><br></br> </h4>
                <ul class="zeddHome__socialLinks">
                    <li>
                        <a href="https://twitter.com/Pleasantech_" target="_blank"><img src={twitterimage} class="zeddHome__socialIcon" /></a>
                    </li>
                    <li>
                        <a href="https://instagram.com/Pleasantech_" target="_blank"> <img src={instagramimage} class="zeddHome__socialIcon" /></a>
                    </li>
                    <li>
                        <a href="https://facebook.com/Pleasanttech01" target="_blank"> <img src={facebookimage} class="zeddHome__socialIcon" /></a>
                    </li>
                </ul>
             
            </div>
        </section>
    )
}

export default Creators
 