import React from 'react'
import "./Hero.scss"
import hero from "../../assets/hero.svg"

const Hero = () => {
    return (
        <div className="container">
            <div className="hero">
            <div className="hero__text">
                <h1>Welcome to CarDeals.tn</h1>
                <h3>Where you find the best car deals for you</h3>
            </div>
                <div className="hero__logo">
                    <img src={hero} alt=" "/>
                </div>
            </div>
        </div>
    )
}

export default Hero
