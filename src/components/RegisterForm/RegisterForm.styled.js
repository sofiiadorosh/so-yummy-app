import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi'; 

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
    height: 42vh;
    background-image: url(${authImageDesktop});
    
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
    position: absolute;
    bottom: 21vh;
    gap: 115px;
    flex-direction: row;
    justify-content: center;
    }
`;

const ImageContainer = styled.div`
  width: 285px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px)  {
    width: 410px;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
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

const RegisterFormBox = styled(Form)`
  width: 335px;
  padding: 32px 28px 20px 28px;

  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);

  border-radius: 30px;
  background: #2A2C36;

  @media screen and (min-width: 768px) {
    width: 500px;
    padding: 44px 50px;
    margin: -10px auto 0 auto;
  }
  @media screen and (min-width: 1440px) {
    padding: 44px 50px;
  }
`; 

const Title = styled.h1`
  position: relative;
  margin-bottom: 18px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[8]}px;
  line-height: 1.07;
  color: ${props => props.theme.colors.primaryLightText};
  
  @media (min-width: 768px) {
    margin-bottom: 32px;
    font-size: ${props => props.theme.fontSizes[9]}px;
  }
`; 

const FormBox = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 25px;
  }
`;

const InputBox = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  :hover {
    opacity: 1;
  }
`;

const IconBox = styled.div`
  position: absolute;
  left: 14px;
  top: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    left: 18px;
    top: 20px;
  }
`;

const NameIcon = styled(FiUser)`
 width: 18px;
 height: 18px;
 fill: transparent;
 stroke: ${({ color }) => color};
`;

const EmailIcon = styled(HiOutlineMail)`
 width: 18px;
 height: 18px;
 fill: transparent;
 stroke: ${({ color }) => color};
`;

const PasswordIcon = styled(FiLock)`
 width: 18px;
 height: 18px;
 fill: transparent;
 stroke: ${({ color }) => color};
 cursor: pointer;
`;

const FormInput = styled(Field)`
  height: 45px;
  padding: 0 45px;

  font-size: ${props => props.theme.fontSizes[6]}px;
  border-radius: 10px;
  border: 1px solid ${({ bordercolor }) => bordercolor};

  background-color: transparent;
  color: ${props => props.theme.colors.whiteText};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
  &::placeholder {
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.whiteText};

    @media screen and (min-width: 769px) {
      font-size: ${props => props.theme.fontSizes[6]}px;
    }
  }
  &:focus,
  :hover {
    border: 1px solid ${({ color }) => color};
    outline: none;
    color: ${props => props.theme.colors.whiteText};
  }
  
  @media screen and (min-width: 768px) {
    height: 60px;
    padding: 0 50px;
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;

const FormButton = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 28px;

  font-size: ${props => props.theme.fontSizes[5]}px;
  border: none;
  border-radius: 10px;
  text-align: center;

  background-color: ${props => props.theme.colors.greenAccent};
  color: ${props => props.theme.colors.whiteText};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover:not([disabled]),
  :focus:not([disabled]) {
    color: ${props => props.theme.colors.quaternaryDarkText}; 
  }
  &[disabled] {
    opacity: 0.4;
  }
  
  @media screen and (min-width: 768px) {
    height: 60px;
    margin-top: 50px;
    font-size: ${props => props.theme.fontSizes[7]}px;
  }
`;

const AuthLink = styled(Link)`
  margin-top: 20px;
  display: block;
  
  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 1.5;
  text-align: center;
  text-decoration: underline;
  color: ${props => props.theme.colors.whiteText};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: ${props => props.theme.colors.greenAccent};
  }
  
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`

export { RegisterBackground, RegisterContainer, ImageContainer, AuthImage, RegisterFormBox, Title, FormBox, InputBox, IconBox, NameIcon, EmailIcon, FormInput, PasswordIcon, FormButton, AuthLink }
