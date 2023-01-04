import React from 'react'
import { Col } from 'react-bootstrap'
import classes from '../../index.module.scss'
const EffectiveDetails = (props) => {
  return (
    <Col md={4} className={classes.card}>
    <h3 className={classes.number}>{props.num}</h3>
    <h6>{props.heading}</h6>
    <ul className={classes.list}>
    <li>{props.one}</li>
    <li>{props.two}</li>
    <li>{props.three}</li>
    </ul>
    </Col>
  )
}

export default EffectiveDetails