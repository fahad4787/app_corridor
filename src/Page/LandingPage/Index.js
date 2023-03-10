import React from 'react'
import AboutSection from '../../component/About'
import AdvertismentSection from '../../component/Advertisment'
import Banner from '../../component/Banner'
import ChooseUs from '../../component/ChooseUs'
import Footer from '../../component/Footer'
import Headers from '../../component/Header'
import MapSection from '../../component/Map'
import OurProjects from '../../component/Our Projects'
import OurTeam from '../../component/OurTeam'
import Reviews from '../../component/Reviews'
import Services from '../../component/Services'
import Skill from '../../component/Skill'
import Sponser from '../../component/Sponser'
import StatsSection from '../../component/Stats'
import GetTouchUs from '../../component/TouchWithUs'

const LandingPage = () => {
  return (
    <>
    <Headers/>
    <Banner/>
    <main>
      <AboutSection/>
      <Services/>
      <ChooseUs/>
      <StatsSection/>
      <Skill/>
      <AdvertismentSection/>
      <OurProjects/>
      <Sponser/>
      <Reviews/>
      <GetTouchUs/>
    </main>
    <Footer/>
    </>
  )
}

export default LandingPage