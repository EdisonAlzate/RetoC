import React, { useContext } from 'react'
import {  useHistory } from 'react-router'
import { types } from '../../types/types'
import { AuthContext } from './AuthContext'

export const LoginScreen = () => {
    const history=useHistory()
    const {dispatch}=useContext(AuthContext)

    const handleLogin=()=>{
    dispatch({
        type: types.login,
        payload: {
            name: 'Edison Alzate'
        }
    });
    history.replace("/Dashboard")
}

    return (
        <div className="container mt-5">
            <h1>LOGIN</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}
