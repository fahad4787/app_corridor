import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import img1 from "../../Images/skill1.png";
import img2 from "../../Images/skill2.png";
import img3 from "../../Images/skill3.png";
import SectionTitle from "../SectionTitle";

const Skill = () => {
  return (
    <section className="skin-bg">
      <Container>
        <SectionTitle
          title="We Are Increasing Business"
          colorText="With Technology"
          align="text-center mb-5"
        />
        <Row className={`${classes.left_sec} align-items-center`}>
          <Col lg={5} className="d-lg-block d-none">
            <div class={`${classes.right_sec} d-flex align-items-center`}>
              <div class={classes.img_group}>
                <img src={img1} alt="img" />
                <img src={img2} alt="img" />
              </div>

              <div class="img-box">
                <img src={img3} alt="img" />
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className={classes.data_holder}>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>ITO & Managed Services</span>
                  <span>60%</span>
                </div>
                <ProgressBar now={60}>
                </ProgressBar>
              </div>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>Engineering Services</span>
                  <span>65%</span>
                </div>
                <ProgressBar now={65} />
              </div>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>Blockchain Services</span>
                  <span>70%</span>
                </div>
                <ProgressBar now={70} />
              </div>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>Digital Services</span>
                  <span>65%</span>
                </div>
                <ProgressBar now={65} />
              </div>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>Interactive Services</span>
                  <span>65%</span>
                </div>
                <ProgressBar now={95} />
              </div>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>Data & Analysis</span>
                  <span>75%</span>
                </div>
                <ProgressBar now={75} />
              </div>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>Automation</span>
                  <span>85%</span>
                </div>
                <ProgressBar now={85} />
              </div>
              <div class="progress-sec">
                <div className={`${classes.title} d-flex align-item-center justify-content-between mb-3`}>
                  <span>Cloud</span>
                  <span>75%</span>
                </div>
                <ProgressBar now={75} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;
