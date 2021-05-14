
import { Dashboard } from '../../Dashboard'
import { LoginScreen } from './LoginScreen'

import React, { useEffect, useReducer }  from 'react'

import {
    BrowserRouter as Router,
    Switch,Route, Redirect
  } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { PrivateRoute } from '../routersPrivates/PrivateRoute';
import { PublicRoute } from '../routersPrivates/PublicRoute';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const AppRouter = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init);
    
    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user])



    return (
        <div>

            <AuthContext.Provider value={{ user, dispatch }}>
                <Router>
                    <div>
                        <Switch>
                            
                            <PublicRoute 
                                exact 
                                path="/login" 
                                component={LoginScreen}
                                isAuthenticated={ user.logged }
                            />
                            <PrivateRoute 
                                path="/"
                                component={Dashboard}
                                isAuthenticated={ user.logged }
                            />
                            <Redirect to="/login" />
                            
                        </Switch>
                    </div>
                </Router>
                </AuthContext.Provider>
        </div>
                
            
    )
}
