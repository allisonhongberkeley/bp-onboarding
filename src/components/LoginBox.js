import React from 'react';
import './LoginBox.css';


const LoginBox = () => {
    return (
        <div className="box">
            <div className="login-comp">
                <h1>Welcome Back!</h1>
                <h4 className="dark-grey">Sign in to continue.</h4>
            </div>

            <div className="login-comp">
                <p>
                    <label for="email">EMAIL</label>
                    <input type="email" id="email" name="email" className="right-align"></input>
                </p>

                <p>
                    <label for="pwd">PASSWORD</label>
                    <input type="password" id="pwd" name="pwd"></input>
                </p>
            </div>

            <div className="login-comp">
                <p>
                    Haven't activated your account yet?     
                     <a href="url">Activate now.</a>
                </p>
            </div>
        </div>
    )
}

export default LoginBox