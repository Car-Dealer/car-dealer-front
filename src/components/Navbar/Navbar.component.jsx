import React from 'react'
import './Navbar.scss'
import logo from "../../assets/logo.svg"
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="white">
            <div className="container">
                <div className="navbar">
                    <a href="/" className="navbar__brand">
                        <img src={logo} alt=" " />
                    </a>
                    <div className="navbar__menu">
                        <div className="navbar__menu-nav">
                            <Link to="/"><li to="/" className="navbar__menu-nav-link">Home</li></Link>
                            <Link to="/car/"><li className="navbar__menu-nav-link">Vehicules</li></Link>
                            <Link to="/"><li className="navbar__menu-nav-link">Contact Us</li></Link>
                    </div>
                    <div className="navbar__menu-button">
                        <Link to="/login"><button className="btn"><AiOutlineUser className="icon"/>SIGN IN </button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
