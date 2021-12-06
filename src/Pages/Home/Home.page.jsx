import React from 'react'
import Footer from '../../components/Footer/Footer.component'
import Hero from '../../components/Hero/Hero.component'
import Products from '../../components/Products/Products.component'
// import Searchbar from '../../components/Searchbar/Searchbar.component'
import "./Home.scss"

const Home = () => {
    return (
        <>
        {/* <Searchbar/> */}
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
        <Footer/>
        </>
    )
}

export default Home
