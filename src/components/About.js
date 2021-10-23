import React from 'react'
import person from '../Assets/Images/person.png'

const About = () => {
    return (
        <div>
            <section className="about">
                <div className="container">
                    <ul >
                        <li >
                            <img src={person} alt="Pleasanttech"></img>
                            <blockquote><strong>DogeStickers</strong> is our first proof to the world that there is a bunch of teenagers in Nigeria , solving problems and having fun at the same time.<br></br> We will be heard , because  we matter. </blockquote>   <cite><strong>- Pleasant Tech 👻</strong></cite>
                            <h4>😎Let's talk tech - <a href='https://htttps://youtube.com/c/pleasanttech'> Youtube</a><a href='https://twitter.com/pleasanttech01'> Twitter </a><a href='https://instagram.com/pleasanttech01'> Instagram </a><a href='https://facebook.com/pleasanttech01'> Facebook</a></h4>
                        </li>
                        <blockquote>&copy; <strong>Changers 2021</strong></blockquote>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default About
