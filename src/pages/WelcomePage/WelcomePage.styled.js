import styled from 'styled-components'; 
import { Link } from 'react-router-dom'; 

import { Logo } from 'components/Logo';
import bgrImageMobile1x from '../../images/hero-mobile-1x.jpg';
import bgrImageTablet1x from '../../images/hero-mobile-2x.jpg';
import bgrImageDesktop1x from '../../images/hero-desktop-1x.jpg';
import bgrImageMobile2x from '../../images/hero-desktop-2x.jpg';
import bgrImageTablet2x from '../../images/hero-tablet-1x.jpg';
import bgrImageDesktop2x from '../../images/hero-tablet-2x.jpg';

const WelcomePageContainer = styled.div`
  position: relative;

  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${bgrImageMobile1x});
    
    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
        ),
        url(${bgrImageMobile2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgrImageTablet1x});
     
     @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
          ),
          url(${bgrImageTablet2x});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 58.58%,
        rgba(0, 0, 0, 0.345172) 78.98%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${bgrImageDesktop1x});
      
      @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
        background-image: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 58.58%,
            rgba(0, 0, 0, 0.345172) 78.98%,
            rgba(0, 0, 0, 0) 100%
          ),
        url(${bgrImageDesktop2x});
      }
  }   
`; 

const StyledLogo = styled(Logo)`
  width: 68px;
  height: 68px;
`;

const WelcomePageTitle = styled.h1`
  margin-bottom: 14px;
  margin-top: 28px;

  font-size: ${props => props.theme.fontSizes[8]}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${props => props.theme.colors.primaryLightText};

  @media screen and (min-width: 769px) {
    margin-top: 44px;
    font-size: ${props => props.theme.fontSizes[9]}px;
  }
`; 

const WelcomeText = styled.p`
  margin-bottom: 40px;

  width: 300px;

  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 1.23;
  letter-spacing: -0.02em;
  text-align: center;
  
  color: ${props => props.theme.colors.primaryLightText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 505px;
  }
  @media (min-width: 1440px) {
    width: 540px;
  }
`; 

const ButtonContainer = styled.div`
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) {
    gap: 20px;
  }
`; 

const RedirectButton = styled(Link)`
  display: block;
  padding: 12px 24px;

  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 1.5;
  background-color: transparent;
  color: ${props => props.theme.colors.primaryLightText};

  border: 1px solid ${props => props.theme.colors.primaryLightText};
  border-radius: 20px 60px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.colors.primaryLightText};
    border: 1px solid ${props => props.theme.colors.greenAccent};
    color: ${props => props.theme.colors.greenAccent};
  }
  &:first-of-type {
    background-color: ${props => props.theme.colors.greenAccent};
    border: none;
    &:hover {
      background-color: ${props => props.theme.colors.darkAccent};
      color: ${props => props.theme.colors.primaryLightText};
    }
  }
  @media screen and (min-width: 769px) {
    padding: 22px 44px;
    font-size: 16px;
  }
`;



export {WelcomePageContainer, StyledLogo, WelcomePageTitle, WelcomeText, ButtonContainer, RedirectButton }