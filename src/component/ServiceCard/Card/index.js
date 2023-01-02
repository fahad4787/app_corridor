import React from 'react'
import { Card, Col } from 'react-bootstrap'
import classes from './../index.module.scss'
const CardDetails = (props) => {
  return (
    <Col xl={3} lg={4} sm={6}>
    <Card className={classes.card}>
    <h6>{props.title}</h6>
    <span>{props.icon}</span>
    </Card>
    </Col>
  )
}

export default CardDetails