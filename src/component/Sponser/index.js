import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";
import img1 from "../../Images/comp1.jpg";
import img2 from "../../Images/comp2.jpg";
import img3 from "../../Images/comp3.png";
import img4 from "../../Images/comp4.jpg";
import img5 from "../../Images/comp5.jpg";
import img6 from "../../Images/comp6.png";
import img7 from "../../Images/comp7.png";
import img8 from "../../Images/comp8.png";
import img9 from "../../Images/comp9.png";
import img10 from "../../Images/comp10.png";

const Sponser = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="gray-bg">
      <SectionTitle title="Leading companies" colorText="chpose us" />
      <Container>
        <Slider className="SponserSlider" {...settings}>
          <div className="img-box">
            <img src={img1} alt="" />
          </div>

          <div className="img-box">
            <img src={img2} alt="" />
          </div>

          <div className="img-box">
            <img src={img3} alt="" />
          </div>

          <div className="img-box">
            <img src={img4} alt="" />
          </div>

          <div className="img-box">
            <img src={img5} alt="" />
          </div>

          <div className="img-box">
            <img src={img6} alt="" />
          </div>
          <div className="img-box">
            <img src={img7} alt="" />
          </div>
          <div className="img-box">
            <img src={img8} alt="" />
          </div>
          <div className="img-box">
            <img src={img9} alt="" />
          </div>
          <div className="img-box">
            <img src={img10} alt="" />
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Sponser;
