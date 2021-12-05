import React from 'react'
import "./Searchbar.scss"
import { carMake } from '../../assets/constants'

const Searchbar = () => {
    return (
        <div className="container">
            <div className="searchbar">
                <input type="text" list="carMake" className="searchbar__make" />
                <datalist id="carMake">
                    {carMake.map((car, i)=>(<option value={car} index={i}></option>))}
                </datalist>
            </div>
        </div>
    )
}

export default Searchbar
