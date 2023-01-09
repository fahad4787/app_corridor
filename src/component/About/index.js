import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle";
import classes from "./index.module.scss";
import img from "../../Images/logo.svg";

const AboutSection = () => {
  return (
    <section>
      <Container>
        <SectionTitle
          title="Meet apps "
          colorText="corridor"
          des="We are dedicated team of apps corridor to deliver technology-oriented solution to increase your bussiness"
          align="text-center"
        />

        <div className={classes.about_detials}>
          <div className={`img-box text-center ${classes.img_holder}`}>
            <img src={img} alt="img" />
            <div className={classes.img_dataHolder}>
              <div>
               <div className={classes.data}>
               <p>Established</p>
               <h6>Since 2019</h6></div>
              </div>

              <div>
              <div className={classes.data}>
                <p>Scale</p>
                <h6>4+ Engineers</h6>
                </div>
              </div>

              <div>
              <div className={classes.data}>
                <p>Global Presence</p>
                <h6>1 Office</h6>
                </div>
              </div>

              <div>
              <div className={classes.data}>
                <p>Trusted</p>
                <h6>30+ Clients</h6>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
