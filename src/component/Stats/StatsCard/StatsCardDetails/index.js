import React from 'react'
import { Card, Col } from 'react-bootstrap'
import classes from './../../index.module.scss'

const StatsCardDetails = (props) => {
  return (
    <Col lg={3} md={6} sm={6}  >
    <Card className={classes.statsCard}>
    <h1>{props.number}</h1>
    <p>{props.value}</p>
    </Card>
    </Col>
  )
}

export default StatsCardDetails