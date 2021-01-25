import React from 'react'
import {animateScroll as scroll } from "react-scroll"
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaGoogle, FaApple} from "react-icons/fa"
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from "./FooterElements"

const Footer = () => {
       const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it Works</FooterLink>
                                <FooterLink to="/signin">Our Platform</FooterLink>
                                <FooterLink to="/signin">News</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                            
                        </FooterLinkItems>
                             <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Employee Support</FooterLink>
                                <FooterLink to="/signin">Technical FAQ</FooterLink>
                                <FooterLink to="/signin">Partner Support</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Technology</FooterLinkTitle>
                                <FooterLink to="/signin">Download</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Partners Portal</FooterLink>
                                <FooterLink to="/signin">How We Protect Your Data</FooterLink>
                            
                        </FooterLinkItems>
                             <FooterLinkItems>
                            <FooterLinkTitle>Work With Us</FooterLinkTitle>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">LinkedIn</FooterLink>
                                <FooterLink to="/signin">Instagram</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>GridWork</SocialLogo>
                        <WebsiteRights>GridWork © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.play.google.com" target="_blank" aria-label="Google Play">
                                <FaGoogle />
                            </SocialIconLink>
                            <SocialIconLink href="//www.apple.com/app-store" target="_blank" aria-label="Apple">
                                <FaApple />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
