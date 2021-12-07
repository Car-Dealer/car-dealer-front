import axios from 'axios'
import React from 'react'
import Footer from '../../components/Footer/Footer.component'
import Hero from '../../components/Hero/Hero.component'
import Products from '../../components/Products/Products.component'
// import Searchbar from '../../components/Searchbar/Searchbar.component'
import "./Home.scss"

const Home = () => {
    const [random, setrandom] = React.useState([])
    React.useEffect(()=>{
        axios.get("http://localhost:3001/car/random")
    .then(res=>setrandom(res.data))
    .catch(e=>console.log(e))
    },[])
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
                <Products list={random}/>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default Home
