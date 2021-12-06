import React from 'react'
import Product from './Product/Product.component'
import "./Products.scss"

const Products = ({list}) => {
    return (
        <div className="container">
            <div className="products">
                {list.map((car, i)=>(<Product key={i} car={car}/>))}
            </div>
        </div>
    )
}

export default Products
