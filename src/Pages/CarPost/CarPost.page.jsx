import React from 'react'
import "./CarPost.scss"
import ImageGallery from "react-image-gallery"
import Products from '../../components/Products/Products.component';
import { BsFillTelephoneFill } from 'react-icons/bs';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

const CarPost = () => {
    return (
        <div className="container">
            <div className="post">
                <div className="post__image">
                    <ImageGallery showPlayButton={false} items={images} />
                </div>
                <div className="post__content">
                    <div className="post__content-title">
                        <h1>Toyota yaris</h1>
                    </div>
                    <div className="post__content-details">
                        <h6>Brand</h6>
                        <p>Toyota</p>
                    </div>
                    <div className="post__content-details">
                        <h6>Model</h6>
                        <p>Yaris</p>
                    </div>
                    <div className="post__content-details">
                        <h6>Mileage</h6>
                        <p>130 000</p>
                    </div>
                    <div className="post__content-details">
                        <h6>Year</h6>
                        <p>2012</p>
                    </div>
                    <div className="post__content-details">
                        <h6>Cylinders</h6>
                        <p>3</p>
                    </div>
                    <div className="post__content-details">
                        <h6>Location</h6>
                        <p>Mannouba</p>
                    </div>
                    <div className="post__content-description">
                        <h3>Description:</h3>
                        <span className="line"></span>
                        <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper.</p>
                    </div>
                    <div className="post__content-pn">
                        <h1>34,500 TND</h1>
                        <div className="post__content-pn-phone">
                            <BsFillTelephoneFill/>
                            <h3>50 995 229</h3>
                        </div>
                    </div>
                </div>
            </div>
            <span className="line"></span>
            <div className="post__similar">
                <h2 className="post__similar-deals">Similar Deals</h2>
                <Products />
            </div>
        </div>
    )
}

export default CarPost
