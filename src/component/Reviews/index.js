import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle";
import user1 from "../../Images/user1.jpg";
import user2 from "../../Images/user2.jpg";
import user3 from "../../Images/user3.jpg";
import classes from "./index.module.scss";
import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="pb-0">
      <Container>
        <SectionTitle title="What our awesome" colorText="users say" />
        <Slider className="ProjectSlider" {...settings}>
          <div className={classes.slide}>
            <div className={classes.profile_img}>
              <img src={user1} alt="img" />
              <h6 className={classes.name}>Vlad Sargu</h6>
              <p>
                CEO at <span>VSArt</span>
              </p>
            </div>

            <span className={classes.review}>
              <h1>
                A est vitae ut nemo et placeat ab veniam possimus iusto,
                doloribus, debitis fugit perspiciatis neque suscipit, dolorum
                earum soluta cumque iste.
              </h1>
            </span>
          </div>
          <div className={classes.slide}>
          <div className={classes.profile_img}>
            <img src={user2} alt="img" />
            <h6 className={classes.name}>Vlad Sargu</h6>
            <p>
              CEO at <span>VSArt</span>
            </p>
          </div>

          <span className={classes.review}>
            <h1>
              A est vitae ut nemo et placeat ab veniam possimus iusto,
              doloribus, debitis fugit perspiciatis neque suscipit, dolorum
              earum soluta cumque iste.
            </h1>
          </span>
        </div>
        <div className={classes.slide}>
        <div className={classes.profile_img}>
          <img src={user3} alt="img" />
          <h6 className={classes.name}>Vlad Sargu</h6>
          <p>
            CEO at <span>VSArt</span>
          </p>
        </div>

        <span className={classes.review}>
          <h1>
            A est vitae ut nemo et placeat ab veniam possimus iusto,
            doloribus, debitis fugit perspiciatis neque suscipit, dolorum
            earum soluta cumque iste.
          </h1>
        </span>
      </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Reviews;
