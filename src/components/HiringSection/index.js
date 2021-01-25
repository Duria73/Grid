import React from 'react'
import {Button} from "../ButtonElement"

import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap} from "./HiringElements"

const HiringSection = ({lightBg, id, imgStart, topLine, lightText, darkText, headline, description, img, alt, buttonLabel, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightText={lightText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" 
                                        smooth={true}
                                        duration={500}
                                        exact="true"
                                        offset={-80}
                                        primary="true"
                                        dark="true"
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default HiringSection