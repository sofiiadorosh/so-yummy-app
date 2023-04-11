import styled from 'styled-components';

import leafsFooterMobile from '../../images/Footer/leafs-footer-mobile.png';
import leafsFooterLaptop from '../../images/Footer/leafs-footer-laptop.png';
import leafsFooterDesktop from '../../images/Footer/leafs-footer-desktop.png';
import bgMob from '../../images/Footer/mob 1x-min.png';
import bgMobRetina from '../../images/Footer/mob 2x-min.png';
import bgTablet from '../../images/Footer/tab 1x-min.png';
import bgTabletRetina from '../../images/Footer/tab 2x-min.png';
import bgDesktop from '../../images/Footer/footer bgi.png';
import bgDesktopRetina from '../../images/Footer/footer bgi2x.png';

const FooterContainer = styled.div`
  max-width: 375px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.darkAccent};
  position: relative;
  max-width: 100% !important;
`;

const FooterBlock = styled.footer`
  position: relative;
  color: ${props => props.theme.colors.primaryDarkText};
`;

const LeafsOnFooter = styled.div`
  position: absolute;
  top: -240px;
  left: 0;
  width: 320px;
  height: 240px;
  background-image: url(${leafsFooterMobile});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
  @media only screen and (min-width: 768px) {
    top: -442px;
    width: 500px;
    height: 442px;
    background-image: url(${leafsFooterLaptop});
  }
  @media only screen and (min-width: 1440px) {
    top: -547px;
    width: 696px;
    height: 547px;
    background-image: url(${leafsFooterDesktop});
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 18px;
  margin-top: 44px;
  a svg > path {
    fill: ${props => props.theme.colors.greenAccent};
  }
  a:hover svg > path,
  a svg:hover > path,
  a svg > path:hover {
    fill: ${props => props.theme.colors.whiteText};
  }
  @media only screen and (min-width: 768px) {
    margin-top: 38px;
    padding-bottom: 24px;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: 41px;
    padding-bottom: 50px;
  }
`;

const DownTextWrapper = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px 73px;
  background-image: url(${bgMob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 160px 172px;
  > :first-child {
    margin-right: 14px;
    font-weight: 500;
  }
  span {
    font-family: Poppins;
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: -0.01em;
    text-align: left;
    opacity: 0.5;
  }
  @media only screen and (min-resolution: 192dpi) {
    background-image: url(${bgMobRetina});
  }
  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    height: 78px;
    background-image: url(${bgTablet});
    background-size: 290px 313px;
    > :first-child {
      margin-right: 28px;
    }
    span {
      font-size: 14px;
      line-height: 14px;
    }
    @media only screen and (min-resolution: 192dpi) {
      background-image: url(${bgTabletRetina});
      background-size: 290px 313px;
    }
  }
  @media only screen and (min-width: 1440px) {
    height: 114px;
    background-image: url(${bgDesktop});
    background-size: 438px 474px;
    span {
      font-size: 14px;
      line-height: 14px;
    }
    @media only screen and (min-resolution: 192dpi) {
      background-image: url(${bgDesktopRetina});
      background-size: 438px 474px;
    }
    > :first-child {
      margin-right: 40px;
    }
  }
`;

export {
  LeafsOnFooter,
  FooterBlock,
  FooterContainer,
  SocialLinksWrapper,
  DownTextWrapper,
};
