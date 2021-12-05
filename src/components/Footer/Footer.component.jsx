import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import insta from "../../assets/insta.svg"
import { BsTwitter } from 'react-icons/bs'
import "./Footer.scss"
import logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer__brand">
                        <img src={logo} alt=" " />
                    </div>
                    <span className="divider"></span>
                    <div className="footer__buttons">
                        <li>About us</li>
                        <li>Feedback</li>
                        <li>FAQS</li>
                    </div>
                    <span className="divider"></span>
                    <div className="footer__contact">
                        <p>Questions? support@email.com</p>
                    </div>
                    <span className="divider"></span>
                    <div className="footer__social">
                        <AiFillFacebook className="footer__social-logo" style={{color:'#4267B2', fontSize:"27px"}}/>
                        <img src={insta} className="footer__social-logo" alt=" " />
                        <BsTwitter className="footer__social-logo" style={{color:'#1DA1F2', fontSize:"27px"}}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
