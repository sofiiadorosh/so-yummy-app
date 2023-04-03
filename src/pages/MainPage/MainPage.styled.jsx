import styled from 'styled-components';
import bgrImageMobile1x from '../../images/mainpage-mobile-1x.png';
import bgrImageTablet1x from '../../images/mainpage-tablet-1x.png';
import bgrImageDesktop1x from '../../images/mainpage-desktop-1x.png';
import bgrImageMobile2x from '../../images/mainpage-mobile-2x.png';
import bgrImageTablet2x from '../../images/mainpage-tablet-2x.png';
import bgrImageDesktop2x from '../../images/mainpage-desktop-2x.png';

const Title = styled.h1`
  margin: 132px 12px 0px 12px;
  color: ${props => props.theme.colors.quaternaryDarkText};
  
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[12]}px;
  line-height: 1;
  display: flex;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    margin: 204px 12px 0px 12px;
    font-size: ${props => props.theme.fontSizes[13]}px;
    line-height: 1;
  }
  @media (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[14]}px;
    line-height: 1;
  }
`;

const ColorWrap = styled.div`
  background-color: ${props => props.theme.colors.primaryLightText};
`;

const Span = styled.span`
  color: ${props => props.theme.colors.greenAccent};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[12]}px;
  line-height: 1;
  text-align: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[13]}px;
    line-height: 1;
  }
  @media (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[14]}px;
    line-height: 1;
  }
`;

const MainPageText = styled.p`
  margin: 14px 40px 157px 40px;
  color: ${props => props.theme.colors.primaryDarkText};
  
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: 1.29;
  text-align: center;
  letter-spacing: '-0.02em';
  @media (min-width: 768px) {
    margin: 24px 40px 32px 12px;
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.29;
    width: 465px;
    text-align: left;
  }
  @media (min-width: 1440px) {
    margin: 14px 55px 50px 24px;
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: 1.72;
    text-align: left;
    width: 362px;
  }
`;

const MainPageBackground = styled.div`
  background-image: url(${bgrImageMobile1x});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${props => props.theme.colors.primaryLightText};
  display: flex;
  height: 777px;
  margin-bottom: 60px;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bgrImageMobile2x});
  }
  @media (min-width: 768px) {
    background-image: url(${bgrImageTablet1x});
    height: 640px;
    margin-bottom: 72px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageTablet2x});
    }
  }
  @media (min-width: 1440px) {
    background-image: url(${bgrImageDesktop1x});
    height: 800px;
    margin-bottom: 100px;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgrImageDesktop2x});
    }
  }
`;
const MainPageContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-right: 368px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media (min-width: 1440px) {
    margin-right: 830px;
  }
`
export { MainPageContainer, MainPageBackground, MainPageText, Span, ColorWrap, Title };