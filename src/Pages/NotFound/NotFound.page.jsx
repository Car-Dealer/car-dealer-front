import React from 'react'
import Footer from '../../components/Footer/Footer.component'
import not from "../../assets/404.jpg"
import "./NotFound.scss"
const NotFound = () => {
    return (
        <>
         <div>
            <img src={not} alt="not found" className="page"/>
         </div>
         <div style={{position:"absolute", bottom: "0", width:"100%"}}>
            <Footer/> 
        </div>   
        </>
    )
}

export default NotFound
