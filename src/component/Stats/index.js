import React from 'react'
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle'
import StatsCards from './StatsCard'

const StatsSection = () => {
  return (
    <section className='gray-bg'>
    <Container>
    <SectionTitle
    title='Some cool stats about'
    colorText='our company'
    des=""
    align='text-center mb-5'
    />

    <StatsCards/>

    </Container>
    </section>
  )
}

export default StatsSection