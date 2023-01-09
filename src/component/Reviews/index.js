import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SectionTitle from "../SectionTitle";
import user1 from "../../Images/user1.jpg";
import user2 from "../../Images/user2.jpg";
import user3 from "../../Images/user3.jpg";
import classes from "./index.module.scss";

const Reviews = () => {
  return (
    <section className="pb-0 gray-bg">
      <Container>
        <SectionTitle
          title="What our awesome"
          colorText="users say"
          des="Our clients’ trust has been our number one priority and we never compromise on this."
          align="text-center"
        />
        <Tabs
          defaultActiveKey="0"
          id="uncontrolled-tab-example"
          className="my-5 review_tabs justify-content-around"
        >
          <Tab
            eventKey="0"
            title={
              <div className={classes.profile_img}>
                <div className="img-box">
                  <img src={user1} alt="image" />
                </div>
                <div className={classes.text_box}>
                  <h6>Vlad Sargu</h6>
                  <p>
                    CEO at <span>VSArt</span>
                  </p>
                </div>
              </div>
            }
          >
         <div className={classes.content_wrapper}>
         <i class="fa-solid fa-quote-right"></i>
         <span className={classes.contect_text}>A est vitae ut nemo et placeat ab veniam possimus iusto, doloribus, debitis fugit perspiciatis neque suscipit, dolorum earum soluta cumque iste.</span>
         </div>
          </Tab>
          <Tab
            eventKey="1"
            title={
              <div className={classes.profile_img}>
                <div className="img-box">
                  <img src={user2} alt="image" />
                </div>
                <div className={classes.text_box}>
                  <h6>Christine May</h6>
                  <p>
                    marketer at <span>SpicyTeam</span>
                  </p>
                </div>
              </div>
            }
          >
          <div className={classes.content_wrapper}>
          <i class="fa-solid fa-quote-right"></i>
          <span className={classes.contect_text}>Incidunt harum quos id, reiciendis nesciunt voluptatibus officia, sequi deleniti hic magni labore libero et eveniet reprehenderit, natus aspernatur! Veritatis, rem, quisquam!</span>
          </div>
          </Tab>
          <Tab
            eventKey="2"
            title={
              <div className={classes.profile_img}>
                <div className="img-box">
                  <img src={user3} alt="image" />
                </div>
                <div className={classes.text_box}>
                  <h6>Andy Way</h6>
                  <p>
                    designer at <span>DDB</span>
                  </p>
                </div>
              </div>
            }
          >
          <div className={classes.content_wrapper}>
          <i class="fa-solid fa-quote-right"></i>
          <span className={classes.contect_text}>A est vitae ut nemo et placeat ab veniam possimus iusto, doloribus, debitis fugit perspiciatis neque suscipit, dolorum earum soluta cumque iste.</span>
          </div>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default Reviews;
