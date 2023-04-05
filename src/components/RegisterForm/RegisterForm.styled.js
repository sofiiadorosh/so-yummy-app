import styled from 'styled-components';

import authImageMobile from '../../images/auth-image-mobile.png';
import authImageTablet from '../../images/auth-image-tablet.png';
import authImageDesktop from '../../images/auth-image-desktop.png';

import sidePictureMob from '../../images/registration-mobile-1x.png';
import sidePictureTab from '../../images/registration-tablet-1x.png';
import sidePictureDesk from '../../images/registration-desktop-1x.png';


const RegisterBackground = styled.div`
  position: absolute;

  display: inline-block;
  width: 100%;
  height: 490px;
  bottom: 0;
  z-index: -1;
  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-image: url(${authImageMobile});

   @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 606px;
    background-image:url(${authImageTablet});
   }
   @media screen and (min-width: 1440px) {
    background-image: url(${authImageDesktop});
    height: 42vh;
    }
`;

const RegisterContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 32px;
   }
  @media screen and (min-width: 1440px) {
    gap: 115px;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 21vh;
    }
`;

const ImageContainer = styled.div`
  width: 285px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 769px) and (max-width: 1440px) {
    width: 410px;
    height: 360px;
  }
  @media screen and (min-width: 1441px) {
    width: 532px;
    height: 468px;
  }
`;

const AuthImage = styled.img`
  width: 100%;
  display: block;
  content: url(${sidePictureMob});
  
  @media (min-width: 768px) {
    content: url(${sidePictureTab});
  }

  @media (min-width: 1440px) {
    content: url(${sidePictureDesk});
  }
`;



export { RegisterBackground, RegisterContainer, ImageContainer, AuthImage }
