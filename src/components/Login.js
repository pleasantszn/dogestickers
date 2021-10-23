import React,{useState, useEffect} from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'
import {ReactComponent as GoogleIcon} from '../Assets/Images/google.svg'

import Alert from './Alert'
import { Redirect } from 'react-router-dom'
import NavBar from './NavBar'


const Login = () => {
	const FormData = Object.freeze({
        profile_pic : '',
        username : '',
    });

    const temp = Object.freeze({
        msg : '',
        btn : '',
        btn2 : '',
        l1 : '',
        l2 : '',
        username : ''
    });
   
	const initialFormData = Object.freeze({
		email : '',
		password : '',
	});
	const [user, setUser] = useState(FormData)

	const [error, setError] = useState(temp)
	const [isError, setIsError] = useState(false)
	const [formData, updateFormData] = useState(initialFormData)

	const getData = () => {
		
	}

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

    const handleSubmit = (e) => {
    	e.preventDefault();
    }


    
    return (
    	<div>
    	<NavBar />
    	<br/>
    
    	
        <div className="login-page">
                    
        	<div className="login-container">
	          	<div className="login-logo-container">

		        </div>
		        <div className="form-container">
		            <div className="main-form">
		        	<h2 className="welcome">Welcome, chief ⚡</h2>
		        	<p className="login-shit">By logging in you accept <br></br>our <span className="privacy">
		        	Privacy Policy </span> and <span className="privacy">
		        	Terms of Service</span> .</p>
		        	
		        	{isError ?  <Alert username = {error.username} msg = {error.msg} btn = {error.btn} btn2 = {error.btn2} l1 = {error.l1} l2 = {error.l2}/> : <div></div>}
		        		
		        	<form className="login">
		        		
		        		<div className='google'>
                
			                <div className="google-container">
			                	<a href="#" className="google-button">
			                	 <GoogleIcon />
			                	</a>
			                    
			                    <h4> Sign-in with Google </h4>
			     			</div>
                
                        </div>
		           		
		        	</form>
		        	</div>
		        	
		        	
		        </div>

		    </div>
        </div>
        </div>
    )
}

export default Login


