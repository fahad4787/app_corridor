import React from 'react'
import {Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle'
import ProfileCard from './ProfileCard'

const OurTeam = () => {
  return (
    <section className='skin-bg'>
    <Container>
    <SectionTitle
    title="Meet our amazing "
    colorText='team'
    align="text-center mb-5"
    />
    <br />
    <br />
    <ProfileCard/>
    </Container>
    </section>
  )
}

export default OurTeam