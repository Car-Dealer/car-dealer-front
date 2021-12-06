import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import Footer from '../../components/Footer/Footer.component'
import "./Signup.scss"

const Signup = () => {
    const [alert, setalert] = React.useState(false)

    return (
        <>
        <div className="container">
            <div className="signup">
                <div className="signup__signin">
                    <h4 className="signup__signin-ktiba">
                        <AiOutlineUser className="icon"/>
                        SIGN UP
                    </h4>
                </div>
                <div className="signup__tosignup">
                    <p>Already have an account? <a href="/login">Sign In</a></p>
                </div>
                <div className="signup__false">
                    <p>{alert?"The email address and the password you entered do not match.":"   "}</p>
                </div>
                <form action="login">
                    <div className="signup__name">
                        <div className="signup__input name">
                            <h4>First name</h4>
                            <input 
                            type="text"
                            placeholder="Joe"
                            autoComplete="off"
                            />
                        </div>
                        <div className="signup__input">
                            <h4>Last name</h4>
                            <input 
                            type="text"
                            placeholder="Doe"
                            autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="signup__input">
                        <h4>Phone Number</h4>
                        <input 
                        type="phone"
                        placeholder="+216 50 995 229"
                        autoComplete="off"
                        />
                    </div>
                    <div className="signup__input">
                        <h4>Email address</h4>
                        <input 
                        type="email"
                        placeholder="joe@doe.com"
                        autoComplete="off"
                        />
                    </div>
                    <div className="signup__input">
                        <h4>Password</h4>
                        <input 
                        type="password"
                        autoComplete="off"
                        />
                    </div>
                    <button onClick={setalert}>Sign up</button>
                </form>
            </div>
        </div>
        <Footer/> 
        </>
    )
}

export default Signup
