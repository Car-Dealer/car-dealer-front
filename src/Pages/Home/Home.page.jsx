import React from 'react'
import Hero from '../../components/Hero/Hero.component'
import Products from '../../components/Products/Products.component'
import "./Home.scss"

const Home = () => {
    return (
        <div className="container">
            <Hero/>
            <div className="zidha">
                <h1>Hot Deals</h1>
                <p>Check out these awesome deals</p>
            </div>
            <div className="hot-deals">
                <Products/>
            </div>
        </div>
    )
}

export default Home
