import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import "./Login.scss"

const Login = () => {
    const [alert, setalert] = React.useState(false)

    return (
        <div className="container">
            <div className="login">
                <div className="login__signin">
                    <h4 className="login__signin-ktiba">
                        <AiOutlineUser className="icon"/>
                        SIGN IN
                    </h4>
                </div>
                <div className="login__tosignup">
                    <p>You don't have an account? <a href="/signup">SIGN UP</a></p>
                </div>
                <div className="login__false">
                    <p>{alert?"The email address and the password you entered do not match.":"   "}</p>
                </div>
                <div className="login__input">
                    <h4>Email address</h4>
                    <input 
                    type="email"
                    placeholder="joe@doe.com"
                    autoComplete="off"
                     />
                </div>
                <div className="login__input">
                    <h4>Password</h4>
                    <input 
                    type="password"
                    autoComplete="off"
                     />
                </div>
                <button onClick={setalert}>Sign in</button>
            </div>            
        </div>
    )
}

export default Login
