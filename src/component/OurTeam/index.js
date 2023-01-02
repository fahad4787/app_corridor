import React from 'react'
import {Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle'
import ProfileCard from './ProfileCard'

const OurTeam = () => {
  return (
    <section>
    <Container>
    <SectionTitle
    title="Meet our amazing "
    colorText='Team'
    />
    <br />
    <br />
    <ProfileCard/>
    </Container>
    </section>
  )
}

export default OurTeam