import React from 'react'
import Products from '../../components/Products/Products.component'
import "./CarSearch.scss"
import { carMake, Carss, cities } from '../../assets/constants'
import Footer from '../../components/Footer/Footer.component';
import axios from 'axios';

function arrayMaker(x=1900,y=2022) {
    let arr=[];
    for (let i=y; i>x;i--){
        arr.push(i)
    }
    return arr
}

axios.post("localhost")

const carrrrrr= {
    make: "",
    model: "",
    city: "",
    year:{
        from: "",
        to: ""
    },
    fuel: "",
    price:{
        from: "",
        to:""
    }}



const CarSearch = () => {
    const [Result, setResult] = React.useState([])
    const [carMaker, setcarMake] = React.useState("")
    const [Models, setModels] = React.useState([])
    const [car, setcar] = React.useState(carrrrrr)
    const carModels = (carr)=>{
        let result = Carss.find(car =>car.names === carr)
        result?setModels(result.models):setModels([])
    }
    React.useEffect(() => {
        console.log(car)
    }, [carMaker, Models, car])

    React.useEffect(()=>{
        axios.post("http://localhost:3001/car", car)
        .then(res=>{
            console.log(res.data)
            setResult(res.data)
        })
        .catch(e=>console.error(e))
    },[car])

    const search = async ()=>{
        axios.post("http://localhost:3001/car", car)
        .then(res=>{
            console.log(res.data)
            setResult(res.data)
        })
        .catch(e=>console.error(e))
    }


    return (
        <>
        <div className="container">
            <div className="search">
                <div className="search__filter">
                    <h6 style={{margin: 0}}>Make</h6>
                    <select className="input" placeholder="Make" value={car.make} key="0" onChange={e=>{
                        setcarMake(e.target.value)
                        carModels(e.target.value)
                        setcar({...car, make: e.target.value})
                        }}>
                    <option value="" index="0">All brands</option>
                    {carMake.map((car, i)=>(<option value={car} key={i+1} index={i+1} disabled={ i === 0 || i===8 ? "disabled" : false }>{car}</option>))}
                    </select>
                    <h6>Model</h6>
                    <select value={car.model} onChange={e=>setcar({...car, model: e.target.value})} className="input" placeholder="model">
                        {car.make!==""?<option value="" index="0">All Models</option>:""}
                        {carMaker !== "" ?Models.map((model, i)=>(<option value={model} key={i} index={i}>{model}</option>)):""}
                    </select>
                    <h6>City</h6>
                    <select value={car.city} className="input" onChange={e=>setcar({...car, city: e.target.value})} placeholder="City">
                        <option value="" index="0">All</option>
                        {cities.map((citi, i)=>(<option value={citi} index={i+1} key={i}>{citi}</option>))}
                    </select>
                    <h6>Year</h6>
                    <div className="selection">
                        <select className="input" style={{marginRight:"18px"}} value={car.year.from} onChange={e=>setcar({...car, year: {from:e.target.value, ...car.year}})}>
                            <option value="" >From</option>
                        </select>
                        <select className="input" value={car.year.to} onChange={e=>setcar({...car, year: {to:e.target.value, ...car.year}})} >
                        <option value="" >To</option>
                        </select>
                    </div>
                    <h6>Fuel</h6>
                    <select value={car.city} className="input" onChange={e=>setcar({...car, fuel: e.target.value})} placeholder="City">
                        <option value="" index="0">All</option>
                        <option value="Diesel" index="1">Diesel</option>
                        <option value="Petrol" index="2">Petrol</option>
                        <option value="Hybrid" index="3">Hybrid</option>
                    </select>
                    <h6>Price</h6>
                    <div className="selection">
                        <select className="input" style={{marginRight:"18px"}} value={car.price.from} onChange={e=>setcar({...car, price: {...car.price, from:e.target.value}})}>
                            <option value="" >From</option>
                            {arrayMaker().map((e,i)=><option value={e} key={i}>{e}</option>)}
                        </select>
                        <select className="input" value={car.price.to} onChange={e=>setcar({...car, price: {...car.price, to:e.target.value}})} >
                            <option value="" key="0">To</option>
                            {arrayMaker(car.price.from).map((e,i)=><option value={e} key={i}>{e}</option>)}
                        </select>
                    </div>
                    <button className="search-button" onClick={search}> Search</button>
                    <p className="reset-button" onClick={e=> setcar(carrrrrr)}>reset</p>
                </div>
                <div className="search__content">
                    <Products list={Result}/>
                </div>
                
            </div>
            
        </div>
        <Footer/>
        </>
    )
}

export default CarSearch
