import React , {useState, useEffect}  from 'react'
import { useHistory } from 'react-router-dom'


const Logout = () => {


    const history = useHistory();

    useEffect(() => {

                
        localStorage.removeItem('jwt')
        localStorage.removeItem('profile_pic')
        alert('You have been logged out! ')
        history.push('/')
        

    },[])

     
    
    return (
        <div>
            
        </div>
    )
}

export default Logout
