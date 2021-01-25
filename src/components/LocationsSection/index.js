import React from 'react'
import Icon1 from "./../../images/toronto.jpg"
import Icon2 from "./../../images/montreal.jpg"
import Icon3 from "./../../images/ottawa.jpg"
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./LocationElements"

const Locations = () => {
    return (
        <ServicesContainer id="locations">
            <ServicesH1>Where We Operate</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Toronto (GTA)</ServicesH2>
                        <ServicesP>See our Toronto Partners</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Montreal</ServicesH2>
                        <ServicesP>See our Montreal Partners</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Ottawa</ServicesH2>
                        <ServicesP>See our Ottawa Partners</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Locations
