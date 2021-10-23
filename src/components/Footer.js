import React from 'react'
import person from '../Assets/Images/person.png'

const Footer = () => {
    return (
        <div>
            <section className="speech">
                <div className="container">
                    <img src={person} alt="Pleasanttech"></img>
                    <blockquote><strong>DogeStickers</strong> is one of our proof's to the world that there are people in Nigeria , solving problems and having fun at the same time.<br></br> We will be heard , because  we matter. </blockquote>   <cite><strong> Pleasant Tech 👌🏾</strong></cite>
                    <h4>😎Let's talk tech <br></br><br></br> <a href='https://htttps://youtube.com/c/pleasanttech' className="social"> Youtube</a><a href='https://twitter.com/pleasanttech01' className="social"> Twitter </a><a href='https://instagram.com/pleasanttech01' className="social"> Instagram </a><a href='https://facebook.com/pleasanttech01' className="social"> Facebook</a></h4>
                     
                    <blockquote>&copy; <strong>Changers 2021</strong></blockquote>
                    <blockquote><strong>POWERED BY GIPHY</strong></blockquote>
                   
                </div>
            </section>
        </div>
    )
}

export default Footer


// ✌🏾