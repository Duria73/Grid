import React, {useState} from 'react'
import Video from "./../../videos/video2.mp4";
import {Button} from "./../ButtonElement"
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Your Career, In Your Own Hands</HeroH1>
                <HeroP>
                    Sign up today and instantly connect with companies in your city looking to hire professionals with various skillsets and expertise like yours
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/signin" onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                
                        >
                        
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
