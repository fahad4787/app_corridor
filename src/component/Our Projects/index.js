import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import project1 from "../../Images/project1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";
import project4 from "../../Images/project4.png";
import SectionTitle from "../SectionTitle";

const OurProjects = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="gray-bg">
      <SectionTitle title="Our" colorText="Projects" />
      <Container>
        <Slider className="ProjectSlider" {...settings}>
          <div>
            <a className="card" href="">
              <div className="img-box">
                <img src={project1} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <a href="#">Connectify</a>
                </h4>
                <p>
                  simplifies your work and life by becoming the personal
                  assistant you never knew you needed! Get automatic and
                  seamless notifications of workflow and activities across all
                  your connected platforms.{" "}
                </p>
              </div>
            </a>
          </div>

          <div>
            <a className="card" href="">
              <div className="img-box">
                <img src={project2} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <a href="#">Medstock</a>
                </h4>
                <p>
                  Medstock supports healthcare professionals across Australia in
                  their daily efforts to improve the lives of patients. Formed
                  in 2011, they owned by Australian.
                </p>
              </div>
            </a>
          </div>

          <div>
            <a className="card" href="">
              <div className="img-box">
                <img src={project3} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <a href="#">eSailing</a>
                </h4>
                <p>
                  Play eSailing is a gaming company focusing that produces
                  sailing games. eSailing will soon open the doors for a virtual
                  sailing platform that bridges between real life sailing and
                  the virtual world.
                </p>
              </div>
            </a>
          </div>

          <div>
            <a className="card" href="">
              <div className="img-box">
                <img src={project4} alt="img" />
              </div>
              <div className="details">
                <h4>
                  <a href="#">Izhar</a>
                </h4>
                <p>
                  The idea behind Izhar was to fill the gap for unique, fun, and
                  affordable lifestyle, and trendy products in the market. It
                  was just a mere step taken, jumping on the bandwagon, and
                  building online presence, and taking hold of the growing
                  e-commerce industry.
                </p>
              </div>
            </a>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default OurProjects;
