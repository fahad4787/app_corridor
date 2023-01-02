import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../SectionTitle";
import ServiceCard from "../ServiceCard";

const AboutSection = () => {
  return (
    <section className="gray-bg">
      <Container>
        <SectionTitle
          title="Meet APPS "
          colorText="CORRIDOR"
          des="We are dedicated team of apps corridor to deliver technology-oriented solution to increase your bussiness"
        />

        <h3 className="my-5">What We Offer?</h3>
        <ServiceCard/>

      </Container>
    </section>
  );
};

export default AboutSection;
