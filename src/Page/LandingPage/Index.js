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
import StatsSection from '../../component/Stats'
import GetTouchUs from '../../component/TouchWithUs'

const LandingPage = () => {
  return (
    <>
    <Headers/>
    <Banner/>
    <main>
    <AboutSection/>
    <ChooseUs/>
    <StatsSection/>
    <AdvertismentSection/>
    <OurTeam/>
    <OurProjects/>
    <Reviews/>
    <GetTouchUs/>
    <MapSection/>
    </main>
    <Footer/>
    </>
  )
}

export default LandingPage