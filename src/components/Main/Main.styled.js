import styled from 'styled-components';

import rightLeavesMobile from '../../images/right-leaves-mobile.png';
import leftLeavesMobile from '../../images/left-leaves-mobile.png';
import squareMobile from '../../images/square-mobile.png';
import rightLeavesTablet from '../../images/right-leaves-tablet.png';
import leftLeavesTablet from '../../images/left-leaves-tablet.png';
import squareTablet from '../../images/square-tablet.png';
import rightLeavesDesktop from '../../images/right-leaves-desktop.png';
import leftLeavesDesktop from '../../images/left-leaves-desktop.png';
import squareDesktop from '../../images/square-desktop.png';

const MainSection = styled.section`
  height: 784px;
  padding: 194px 0 18px;

  background-repeat: no-repeat;

  overflow: hidden;

  @media screen and (max-width: 767px) {
    background-image: url(${leftLeavesMobile}), url(${rightLeavesMobile}),
      url(${squareMobile});
    background-repeat: no-repeat;
    background-position: top left, bottom right, bottom right;
  }

  @media screen and (min-width: 768px) {
    height: auto;
    padding: 204px 0 195px;

    background-image: url(${leftLeavesTablet}), url(${rightLeavesTablet}),
      url(${squareTablet});
    background-position: top left, bottom right, top right;
  }

  @media screen and (min-width: 1440px) {
    padding: 226px 0 267px;

    background-image: url(${leftLeavesDesktop}), url(${rightLeavesDesktop}),
      url(${squareDesktop});
  }
`;

const Container = styled.div`
  position: relative;

  width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;

    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

const MainTitleWrapper = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  p {
    width: 248px;
    margin: 0 auto;

    font-weight: ${props => props.theme.fontWeights.regular};
    line-height: 1.29;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.primaryDarkText};

    @media screen and (min-width: 768px) {
      width: 362px;
      margin: 24px 0 32px;
      padding-left: 6px;
    }

    @media screen and (min-width: 1440px) {
      width: 465px;
      margin: 14px 0 50px;
      padding-left: 7px;

      font-size: ${props => props.theme.fontSizes[5]}px;
      line-height: 1.33;
    }
  }
`;

const SearchFormWrapper = styled.div`
  position: absolute;
  left: 40px;
  bottom: 0;

  transform: translateY(100%);

  @media screen and (min-width: 768px) {
    position: static;
    transform: none;
  }
`;

const MealPicture = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    position: static;
  }
`;

const Meal = styled.img`
  width: 320px;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -69px;
    right: -10px;

    width: 378px;
  }

  @media screen and (min-width: 1440px) {
    bottom: -132px;
    right: 184px;

    width: 578px;
  }
`;

const Arrow = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 28.15px;
    bottom: -82.7px;

    display: block;
  }

  @media screen and (min-width: 1440px) {
    right: 68.15px;
    bottom: -96.7px;
  }
`;

const ProductWrapper = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 32px;
    bottom: -28px;
  }

  @media screen and (min-width: 1440px) {
    bottom: -43px;
    right: 122px;
  }
`;

export {
  MainSection,
  Container,
  MainTitleWrapper,
  SearchFormWrapper,
  MealPicture,
  Meal,
  Arrow,
  ProductWrapper,
};
