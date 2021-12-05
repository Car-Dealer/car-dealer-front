import React from 'react'
import Product from './Product/Product.component'
import { cars } from '../../assets/constants'
import "./Products.scss"

const Products = () => {
    return (
        <div className="container">
            <div className="products">
                {cars.map((car, i)=>(<Product key={i} car={car}/>))}
            </div>
        </div>
    )
}

export default Products
