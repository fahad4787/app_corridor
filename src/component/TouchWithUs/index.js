import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle";
import classes from "./index.module.scss"



const GetTouchUs = () => {
  return (
    <section className={`${classes.touch_bg}`}>
      <Container>
        <div className={`my-5 p-5 rounded ${classes.touch_us}`}>
          <SectionTitle
            title="Get in touch"
            colorText="with us"
            des="You can contact us with anything related to App corridor. We'll get in touch with you as soon as possible."
            align="text-center mb-3"
          />

       <div className={classes.btn_group}>
       <a href="#" className={classes.btn}>Contact Us</a>
       <a href="#" className={classes.btn}>Call Us</a>
       </div>
        </div>
      </Container>
    </section>
  );
};

export default GetTouchUs;
