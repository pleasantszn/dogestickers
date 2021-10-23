/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'


const Nav = (props) => {
    
    return (
        <nav className="navbar">
            <div className="logo-container">
             <Link to = '/' style={{textDecoration : 'none'}}>
                <img src={logo} alt ="logo" className="logo"/>
             </Link>
            </div>
            <ul className="navbar-nav"> 

                {props.children}
            </ul>
       </nav>
    )
}




export default Nav
