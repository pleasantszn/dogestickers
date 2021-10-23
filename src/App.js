/* eslint-disable jsx-a11y/anchor-is-valid */
// ca-pub-8043922143492990
import React,{useState,useEffect} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import NavBar from './components/NavBar'
import Uploads from './components/Uploads'
import SearchResult from './components/SearchResult'
import UploadResult from './components/UploadResult'
import Upload from './components/Upload'


import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'


const App = () => {
    
    
    
    return (
        
        <Router>
        
            <div className="App">

                
                
                <Switch>

                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/search/:search" component={SearchResult} />
                    <Route path='/auth' exact component = {() => <Login/>} />
                    <Route path='/logout' exact component = {() => <Logout/>} />
                    <Route path='/feed' exact component ={Uploads} />
                    <Route path='/upload' exact component ={Upload} />
                    <Route path='/feed/:search' component ={UploadResult} />
                </Switch>
                
            </div>
        </Router>
    )
        
}



export default App
