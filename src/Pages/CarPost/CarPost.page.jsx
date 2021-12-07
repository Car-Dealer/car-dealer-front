import React from "react";
import "./CarPost.scss";
import ImageGallery from "react-image-gallery";
import Products from "../../components/Products/Products.component";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer.component";
import axios from "axios";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const CarPost = (params) => {
    const { id } = useParams()
  const [car, setcar] = React.useState({})
  const [random, setrandom] = React.useState([])
  React.useEffect(()=>{
    axios.get(`http://localhost:3001/car/${id}`)
    .then(res=>{
        console.log(res.data)
        setcar(res.data)
    })
    .catch(e=>console.error(e))
    axios.get("http://localhost:3001/car/random")
    .then(res=>setrandom(res.data))
    .catch(e=>console.log(e))
  },[id])

  return (
    <>
    <div className="container">
      <div className="post">
        <div className="post__image">
          <ImageGallery showPlayButton={false} items={images} />
        </div>
        <div className="post__content">
          <div className="post__content-title">
            <h1>{car.make + " " + car.model}</h1>
          </div>
          <div className="post__content-wrap">
            <div className="post__content-wrap-details">
              <div className="post__content-details">
                <h6>Brand</h6>
                <p>{car.make}</p>
              </div>
              <div className="post__content-details">
                <h6>Brand</h6>
                <p>{car.fuel}</p>
              </div>
              <div className="post__content-details">
                <h6>Model</h6>
                <p>{car.model}</p>
              </div>
              <div className="post__content-details">
                <h6>Mileage</h6>
                <p>{car.mileage} km</p>
              </div>
              <div className="post__content-details">
                <h6>Year</h6>
                <p>{car.year}</p>
              </div>
              <div className="post__content-details">
                <h6>Cylinders</h6>
                <p>{car.cylinder}</p>
              </div>
              <div className="post__content-details">
                <h6>Location</h6>
                <p>{car.location}</p>
              </div>
            </div>
            <div className="post__content-rate">
              <h2>rate</h2>
              <p>{car.price_rate}</p>
            </div>
          </div>
          <div className="post__content-description">
            <h3>Description:</h3>
            <span className="line"></span>
            <p>
              {car.description}
            </p>
          </div>
          <div className="post__content-pn">
            <h1>{car.price} TND</h1>
            <div className="post__content-pn-phone">
              <BsFillTelephoneFill />
              <h3>50 995 229</h3>
            </div>
          </div>
        </div>
      </div>
      <span className="line"></span>
      <div className="post__similar">
        <h2 className="post__similar-deals">Similar Deals</h2>
        <Products list={random}/>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default CarPost;
