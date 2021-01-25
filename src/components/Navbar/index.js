import React, {useState, useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import {IconContext} from "react-icons/lib"
import {animateScroll as scroll } from "react-scroll"


import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements";

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        GridWork
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offSet={-80}
                                activeClass="active"
                            >
                                About
                            </NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="discover"
                                smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offSet={-80}
                                    activeClass="active"
                                >
                                    Discover
                            </NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offSet={-80}
                                >Services</NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="locations"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offSet={-80}
                                >Locations</NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="hiring"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offSet={-80}
                                >Hiring?</NavLinks>
                        </NavItem>  
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Download</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
