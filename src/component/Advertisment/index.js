import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SectionTitle from "../SectionTitle";
import stack from "../../Images/stackimg.png";
import dif from "../../Images/diffimg.png";
import agile from "../../Images/agile.png";

const AdvertismentSection = () => {
  return (
    <section className="skin-bg">
      <Container>
        <SectionTitle title="Our company has" colorText="everything" />
        <Tabs
          defaultActiveKey="0"
          id="uncontrolled-tab-example"
          className='my-5 advertisement_tabs'
        >
          <Tab eventKey="0" title="Technical Experties">
            <div className="img-box shadow">
              <img src={stack} alt="" />
            </div>
          </Tab>
          <Tab eventKey="1" title="Effectiveness">
            <div className="img-box shadow">
              <img src={dif} alt="" />
            </div>
          </Tab>
          <Tab eventKey="2" title="Agile Apporch">
            <div className="img-box shadow">
              <img src={agile} alt="" />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default AdvertismentSection;
