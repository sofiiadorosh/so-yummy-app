import styled from 'styled-components';
import bgrImageMobile1x from '../../images/mainpage-mobile-1x.png';
import bgrImageTablet1x from '../../images/mainpage-tablet-1x.png';
import bgrImageDesktop1x from '../../images/mainpage-desktop-1x.png';
import bgrImageMobile2x from '../../images/mainpage-mobile-2x.png';
import bgrImageTablet2x from '../../images/mainpage-tablet-2x.png';
import bgrImageDesktop2x from '../../images/mainpage-desktop-2x.png';

export const MainPageH1 = styled.h1`
  margin: 132px 12px 0px 12px;
  color: '#22252A';
  
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  display: flex;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    margin: 204px 12px 0px 12px;
    font-size: 72px;
    line-height: 72px;
  }
  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const ColorWrap = styled.div`
  background-color: #fafafa;
`;

export const SpanGr = styled.span`
  color: #8baa36;
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: -0.005em;
  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
  }
  @media (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const MainPageText = styled.p`
  margin: 14px 40px 157px 40px;
  color: '#23262A';
  
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: '-0.02em';
  @media (min-width: 768px) {
    margin: 24px 40px 32px 12px;
    font-size: 14px;
    line-height: 18px;
    width: 465px;
    text-align: left;
  }
  @media (min-width: 1440px) {
    margin: 14px 55px 50px 24px;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
    width: 362px;
  }
`;

export const MainPageBg = styled.div`
  background-image: url(${bgrImageMobile1x});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fafafa;
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
export const MainPageDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-right: 368px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  @media (min-width: 1440px) {
    margin-right: 830px;
  }
`;