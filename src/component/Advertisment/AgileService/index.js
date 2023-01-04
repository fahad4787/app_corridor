import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "../index.module.scss";


const AgileService = () => {
  return (
    <section className="pb-0" style={{overflow :"visible"}}>
      <h4 className={classes.main_heading}>
        Agile software development approch.
      </h4>
      <Row className="counter-list">
        <Col xl={4} md={6} className={classes.box1} >
          <div class="box bg">
            <div class="content">
              <h3>Service</h3>
              <ul>
                <li>Block Refinement</li>
                <li>Sprint planning</li>
                <li>Daily Secrum</li>
                <li>Sprit Reviewe</li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xl={4} md={6} className={classes.box2}>
          <div class="box bg">
            <div class="content">
              <h3>Roles</h3>
              <ul>
                <li>
                  Scrum team can be compromised of all kinds of people including
                  designers, writers, programmers,etc.
                </li>
                <li>
                  {" "}
                  <strong>The scrum master:</strong> help the product owner
                  define value, the developmentbteam deliver the value, and the
                  scrum team to get better.
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col xl={4} md={6} className={classes.box3}>
          <div class="box bg">
            <div class="content">
              <h3>Goals</h3>
              <ul>
                <li>Visualize progress, impediments, burn down</li>
                <li>Implement the value of Agile Manifesto</li>
                <li>Ensures work & impediments are made visible</li>
                <li>maintain external radiators of team progress</li>
                <li>Encourages openess and transparencys</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default AgileService;
