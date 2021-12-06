import React from 'react'
import "./Product.scss"
import { ImLocation } from 'react-icons/im'
import { IoMdCash } from 'react-icons/io'

const Product = ({car}) => {
    return (
        <a href={"/car/"+car.id} className="product" >
            <div className="product__postdate">
                <p>{car.date}</p>
            </div>
            <div className="product__img">
                <img src={car.img} alt="" />
            </div>
            <div className="product__firstline">
                <h2>{car.make + " " + car.model}</h2>
                <p>{car.year}</p>
            </div>
            <div className="product__secondline">
                <h2>{car.mileage}</h2>
            </div>
            <div className="product__thirdline">
                <ImLocation className="logo"/>
                <div className="product__thirdline-content">
                    <h3 className="title">Location</h3>
                    <p>{car.location}</p>
                </div>
            </div>
            <div className="product__lastline">
                <div className="product__lastline-price">
                    <IoMdCash className="logo"/>
                    <div className="content">
                        <h3>Price</h3>
                        <p>{car.price} DT</p>
                    </div>
                </div>
                <div className="product__lastline-rate">
                    <h3>rate</h3>
                    <p>{car.price_rate}</p>
                </div>
            </div>
        </a>
    )
}

export default Product
