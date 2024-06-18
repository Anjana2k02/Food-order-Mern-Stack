import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login"?<></>:<input type="text" placeholder="Username" required />}
                    <input type="email" placeholder="E-mail" required />
                    <input type="password" placeholder="Password" required/>
                    {currState === "Sign Up" && <input type="password" placeholder="Confirm Password" />}
                </div>
                <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required/>
                    <p>By continuning, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have an account ? <span onClick={()=>setCurrState("Login")}> Login here</span></p>
                }
                
            </form>
        </div>
    );
}

export default LoginPopup;
