import React from 'react'
import { Col } from 'react-bootstrap'
import classes from '../../index.module.scss'
const EffectiveDetails = (props) => {

  const {num , heading, one, two, three, four} = props;

  return (
    <Col md={4} className={classes.card}>
      <h3 className={classes.number}>{num}</h3>
      <h6>{heading}</h6>
      <ul className={classes.list}>
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ul>
    </Col>
  );
}

export default EffectiveDetails