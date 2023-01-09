import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Images/logo.svg";
import ContactUsList from "./ContactUsList";
import FooterList from "./FooterList";
import classes from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row className={classes.footer_sec}>
          <Col md={12} className=" mb-sm-5 mb-5">
            <a href="#" className="mb-3 d-block">
              <img src={logo} alt="logo" />
            </a>
            <p>
              We will help you bringing your complex software vision to life.
            </p>
          </Col>
          <FooterList />
          <ContactUsList />
        </Row>
      </Container>
      <div className={classes.copyright_footer}>
        <p>© Copyright All Right Reserved 2023, App Corridor</p>
      </div>
    </footer>
  );
};

export default Footer;
