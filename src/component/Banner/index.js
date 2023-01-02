import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";
import Slide from "./Slide";

const Banner = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 3000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
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
         <Slide/>
         <Slide/>
        </Slider>
      </Container>
    </div>
  );
};

export default Banner;
