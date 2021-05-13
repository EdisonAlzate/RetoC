
import { Dashboard } from '../../Dashboard'
import { LoginScreen } from './LoginScreen'

import React  from 'react'
/* import React, { useContext } from 'react' */
import {
    BrowserRouter as Router,
    Switch,Route, Redirect
  } from 'react-router-dom';

export const AppRouter = () => {
    return (
        
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={LoginScreen}/>
                        <Route path="/" component={Dashboard}/>
                        <Redirect to="/login" />
                        
                    </Switch>
                </div>
            </Router>
                
            
    )
}
