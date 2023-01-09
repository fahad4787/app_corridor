import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SectionTitle from "../SectionTitle";
import img1 from "../../Images/sponser1.png";
import img2 from "../../Images/sponser2.png";
import img3 from "../../Images/sponser3.png";
import img4 from "../../Images/sponser4.png";
import img5 from "../../Images/sponser5.png";
import img6 from "../../Images/sponser6.png";
import img7 from "../../Images/sponser7.png";
import img8 from "../../Images/sponser8.png";
import img9 from "../../Images/sponser9.png";
import img10 from "../../Images/sponser10.png";
const Sponser = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
    <Container>
    <SectionTitle title="Leading companies" colorText="choose us"  align="text-center mb-5"/>
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
