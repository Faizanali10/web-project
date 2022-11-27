import React from 'react'
import banner_img from '../photos/banner-img.jpg'
import independence from '../photos/ndependence_day_Big_tile.webp'
import img_3 from '../photos/img-3.jpg'
import img_2 from '../photos/img-2.jpg'
import phone_img_1 from '../photos/phone-img-1.webp'
import phone_img_2 from '../photos/phone-img-2.jpg'
import phone_img_3 from '../photos/phone-img-3.jpg'
import phone_img_4 from '../photos/phone-img-4.jpg'


export default function Middlecom() {
  return (
    <div className='hide-Elements'>
     
    <div className="banner-box">
        <img className="banner-img" src={banner_img} alt="banner-img" />
      </div>
      <div className="about-this-site">
        <h1>All you need here is available</h1>
        <p>Purchase all the Genuine Products</p>
        <h1>In Apni Dukaan all the Famous Brands are Available</h1>
      </div>
      <div className="img-box">
        <div className="img-box-1">
          <img src={independence} alt="" />
        </div>
        <div className="img-box-2">
          <div className="img-box-01">
            <img src={img_3} alt="" />
          </div>
          <div className="img-box-02">
            <img src={img_2} alt="" />
          </div>
        </div>
      </div>

      <div className="slildeShow-container">
        <div className="myslides fade">
          <img
            className="phone-img"
            src={phone_img_1}
            alt="phone-img"
          />
        </div>

        <div className="myslides fade">
          <img className="phone-img" src={phone_img_2} alt="phone-img" />
        </div>

        <div className="myslides fade">
          <img className="phone-img" src={phone_img_3} alt="phone-img" />
        </div>

        <div className="myslides fade">
          <img className="phone-img" src={phone_img_4} alt="phone-img" />
        </div>

        {/* <!-- buttons -->
        <!-- <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a className="next" onclick="plusSlides(1)">&#10095;</a> --> */}
      </div>

    </div>

  )
}