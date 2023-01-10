import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ContactListLink from "./ContactListLink";
import ContactUsListData from "./ContactUsListData";
import classes from "../index.module.scss";

const ContactUsList = () => {
  const [data] = useState(ContactUsListData);

  return (
    <Col md={4} className="d-sm-flex justify-content-md-start justify-content-center">
      <ul className={classes.contact_us_list}>
        {data.map((currn, ind) => {
          return <ContactListLink key={ind} {...currn} />;
        })}
      </ul>
    </Col>
  );
};

export default ContactUsList;
