import React,{useState, useEffect} from 'react'

import {ReactComponent as UserIcon} from '../Assets/Images/user.svg'
import {ReactComponent as UploadIcon} from '../Assets/Images/upload.svg'
import {ReactComponent as CodeIcon} from '../Assets/Images/code.svg'
import {ReactComponent as UsersIcon} from '../Assets/Images/users.svg'
import {ReactComponent as AwardIcon} from '../Assets/Images/award.svg'

import Nav from './Nav'
import { Link } from 'react-router-dom'
const NavBar = () => {

    
    return (
        <>
        	<Nav>
                

                <NavItem icon ={<UserIcon/>} >
                   <DropDownMenu />
                </NavItem>

            </Nav>
          
        </>
    )
}

function DropDownMenu ({image, isDp}){
    
    function DropDownItem (props){

        return(
            <a href="#" className="menu-item">
                <span className ="icon-button">{ props.leftIcon } </span>
                {props.children}
                
                
            </a>
        )
    }

    return (
        <div className="dropdown">
            <DropDownItem leftIcon={<UserIcon />}> <span className="nav-text">My Profile </span></DropDownItem>
            <DropDownItem leftIcon="🥇"> <span className="nav-text"> Leaderboard </span></DropDownItem>
            {isDp ? 
                <Link to = '/logout' style={{textDecoration : 'none'}}>
                <DropDownItem leftIcon="🔓"> <span className="nav-text">Log-out</span></DropDownItem>
                </Link> 
            :

                <Link to = '/auth' style={{textDecoration : 'none'}}>
                <DropDownItem leftIcon="🔓"> <span className="nav-text">Login</span></DropDownItem>
                </Link> 
            }
            <DropDownItem leftIcon="🐞"> <a href="https://twitter.com/Pleasantech_" ><span className="nav-text" target = "_blank">Report a bug</span></a></DropDownItem>
            <DropDownItem leftIcon="💰"> <a href  = "https://youtube.com/c/Pleasanttech" target = "_blank"><span className="nav-text">Support</span></a></DropDownItem>
             <DropDownItem leftIcon="❤">  <a href = "https://facebook.com/groups/615684912431869/" style={{textDecoration : 'none'}} target = "_blank"><span className="nav-text">Join Us</span></a></DropDownItem>
        </div>
    )
}
function NavItem(props){

    const [open, setOpen] = useState(false);
    return(
       <div>
            <li className="nav-item">
                <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                    {props.icon }
                </a>
                {open && props.children}
            </li>

        </div>
    );
}

export default NavBar

// <Link to = '/feed' style={{textDecoration : 'none'}}>
//                     <NavItem icon={<UsersIcon />}/>
//                 </Link>
//                 <Link to = '/upload' style={{textDecoration : 'none'}}>
//                     <NavItem icon={<UploadIcon />}/>
//                 </Link>
