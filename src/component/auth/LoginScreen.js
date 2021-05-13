import React from 'react'
import { useHistory } from 'react-router'

export const LoginScreen = () => {
    const history=useHistory()
    
const handleLogin=()=>{
    history.replace("/")
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
