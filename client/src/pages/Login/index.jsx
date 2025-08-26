import { useState } from "react";
import logo from '../../pictures/Logo.png'
import './style.css'

function Login() {

    return (
        <>
            <div className="login-card-container">
                <div className="login-card" id="card">
                    <div className="face front">
                        <img src={logo} alt="logo" className="img-fluid" style={{ width: "150px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login