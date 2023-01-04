import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SectionTitle from "../SectionTitle";
import stack from "../../Images/stackimg.png";
import dif from "../../Images/diffimg.png";
import agile from "../../Images/agile.png";
import EffectivenessTab from "./Effectiveness";
import TechnicalSlider from "./TechnicalSlider";
import AgileService from "./AgileService";

const AdvertismentSection = () => {
  return (
    <section>
      <Container>
        <SectionTitle title="Our company has" colorText="everything" />
        <Tabs
          defaultActiveKey="0"
          id="uncontrolled-tab-example"
          className='my-5 advertisement_tabs'
        >
          <Tab eventKey="0" title="Technical Experties">
            <TechnicalSlider/>
          </Tab>
          <Tab eventKey="1" title="Effectiveness">
           <EffectivenessTab/>
          </Tab>
          <Tab eventKey="2" title="Agile Apporch">
           <AgileService/>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default AdvertismentSection;
