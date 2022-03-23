import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css"; 
import "./slider-theme.css";
// import slide1 from './images/slide1.png';
// import slide2 from './images/slide2.png';
// import slide3 from './images/slide3.png';
// import slide4 from './images/slide4.png';
// import team2 from './images/Drewpeach.jpeg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 625,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }, 
          },
          {
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }, 
          },
          {
            breakpoint: 450,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }, 
          },
        ],
    };
    return (
      <div>
        <Slider {...settings}>
          {/* <div className="px-1">
              <img src={team2} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-1">
              <img src={slide1} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-1">
              <img src={slide2} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-1">
              <img src={slide3} className="d-block mx-5" className="gifimg"/>
          </div>
          <div className="px-1">
              <img src={slide4} className="d-block mx-5" className="gifimg"/>
          </div>  */}
        </Slider>
      </div>
    );
  }
}