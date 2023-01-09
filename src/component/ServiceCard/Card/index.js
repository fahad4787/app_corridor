import React from 'react'
import { Card, Col } from 'react-bootstrap'
import classes from './../index.module.scss'
const CardDetails = (props) => {
  return (
    <Col className={classes.col}>
    <Card className={classes.card}>
    <div className={classes.iconBox}>{props.icon}</div>
    <h6>{props.title}</h6>
    </Card>
    </Col>
  )
}

export default CardDetails