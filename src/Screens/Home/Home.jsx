import React from 'react'

// Components :
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from './Components/HeroSection/HeroSection';
import MechanicalSection from './Components/MechanicalSection/MechanicalSection';
import BenefitSection from './Components/BenefitSection/BenefitSection';
import AboutSection from './Components/AboutSection/AboutSection';
import TakeLookSection from './Components/TakeLookSection/TakeLookSection';
import PlanSection from './Components/PlanSection/PlanSection';
import Footer from './Components/Footer/Footer';





const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <MechanicalSection/>
            <BenefitSection/>
            <AboutSection/>
            <TakeLookSection/>
            <PlanSection/>
            <Footer/>
        </>
    )
}

export default Home
