import React,{useState} from 'react'
import {ReactComponent as GoogleIcon} from '../Assets/Images/google.svg'
import NavBar from './NavBar'

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState('');
    const [isFilePicked, setIsFilePicked] = useState(false);
    
    
    const changeHandler = (event) => {
        event.preventDefault();
        setIsFilePicked(true);
        setSelectedFile(event.target.files[0])        
    
    }
    const handleSubmission = () => {
        console.log('obo')       
   
    }

    if (isFilePicked){
        handleSubmission()
    }
    
    return (
        <div>
        <NavBar />
        <br/>
        <div className="login-page">
                    
            <div className="login-container">
                <div className="form-container">
                    <div className="main-form">
                    <h2 className="welcome">Welcome, chief ⚡</h2>
                    <p className="login-shit">By logging in you accept <br></br>our <span className="privacy">
                    Privacy Policy </span> and <span className="privacy">
                    Terms of Service</span> .</p>
                    <form className="login">
                        
                        <div className='google'>

                            
                            
                            <input type="file"  className="primary-cta" name="upload" accept="image/*" id='upload' onChange={changeHandler} />
             
                        </div>
                        
                    </form>
                    </div>
                    
                    
                </div>

            </div>
        
        </div>
        </div>
        
    )
}

export default Upload
