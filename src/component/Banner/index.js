import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { useState } from "react";
import BannerData from "./BannerData";
import SliderCard from "./SliderCard";



const Banner = () => {
  const [data] = useState(BannerData);
  const settings = {
    dots: true,
    arrows: false,
    speed: 1500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        dots:false,
        arrow:false,
        },
      },
    ],
  };
  return (
    <div className="banner">
      <Container>
        <Slider className="banner-slider" {...settings}>
         
          {
            data.map((currn, ind)=>{
              return(
                <SliderCard key={ind} {...currn}/>
              );
            })
          
         }
        </Slider>
      </Container>
    </div>
  );
};

export default Banner;
