import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainApp from './pages/App'
import { LoginPage } from './pages/Auth'


const App = () => {
  return (
        <div className="App">
          <Router>
            <Switch>
            <Route exact path="/app">
              <MainApp />
            </Route>
              <Route exact path="/auth" component={LoginPage} />
            </Switch>
          </Router>
          
        </div>
        
    )
        
}



export default App
