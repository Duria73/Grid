import React, {useState} from 'react'

//components 
import Sidebar from "./../components/Sidebar"
import Navbar from "./../components/Navbar"
import HeroSection from "./../components/HeroSection"
import InfoSection from "./../components/InfoSection"
import DiscoverySection from "./../components/DiscoverySection"
import ServicesSection from "./../components/ServicesSection"
import Location from "./../components/LocationsSection"
import HiringSection from "./../components/HiringSection"
import Footer from "./../components/Footer"

//Data imports 
import { HomeObjOne } from '../components/InfoSection/Data'
import { HomeObjTwo } from '../components/DiscoverySection/Data'
import { HomeObjThree } from '../components/ServicesSection/Data'
import { HomeObjFour} from "../components/HiringSection/Data"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...HomeObjOne}/>
            <DiscoverySection {...HomeObjTwo}/>
            <ServicesSection {...HomeObjThree}/>
            <Location />
            <HiringSection {...HomeObjFour}/>
            <Footer/>
        </>
    )
}

export default Home
