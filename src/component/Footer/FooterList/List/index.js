import React from "react";
import { Col } from "react-bootstrap";

const ListHolder = (props) => {
  return (
    <>
      <Col md={4} sm={6} className="mb-md-0 mb-sm-3 mb-0">
        <ul>
          <li>
            <a href="#">{props.list1}</a>
          </li>
          <li>
            <a href="#">{props.list2}</a>
          </li>
          <li>
            <a href="#">{props.list3}</a>
          </li>
        </ul>
      </Col>
    </>
  );
};

export default ListHolder;
