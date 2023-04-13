import styled from 'styled-components';
import leavesDesktop from '../../images/section-leaves-desktop.png';
import leavesTablet from '../../images/section-leaves-tablet.png';
import leavesMobile from '../../images/section-leaves-mobile.png';

const PreparationSection = styled.section`
  padding-bottom: 100px;

  @media screen and (max-width: 767px) {
    background-image: url(${leavesMobile});
    background-repeat: no-repeat;
    background-position: bottom -246px left;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 200px;
    background-image: url(${leavesTablet});
    background-repeat: no-repeat;
    background-position: bottom -370px left;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${leavesDesktop});
    background-position: bottom -520px left;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    gap: 50px;

    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;

    width: 1440px;
    padding: 0 100px;
  }
`;
const CookingDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  h2 {
    font-weight: ${props => props.theme.fontWeights.semibold};
    font-size: ${props => props.theme.fontSizes[7]}px;
    line-height: 1;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.secondaryDarkText};
  }
`;

const CookingSteps = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  @media screen and (min-width: 1440px) {
    gap: 19.5px;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
  }
`;

const ListIdx = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 21px;
  height: 21px;

  background-color: ${props => props.theme.colors.greenAccent};

  border-radius: 50%;

  span {
    font-weight: ${props => props.theme.fontWeights.semibold};
    font-size: ${props => props.theme.fontSizes[2]}px;
    line-height: 1.5;

    color: ${props => props.theme.colors.whiteText};

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes[3]}px;
    }
  }
`;

const StepDescr = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.17;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.blackText};

  opacity: 0.8;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.29;
  }
`;

const CookingPicture = styled.div`
  flex-shrink: 0;
  width: 343px;
  height: 250px;

  border-radius: 8px;

  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 433px;
    height: 332px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export {
  PreparationSection,
  Container,
  CookingDescr,
  CookingSteps,
  ListIdx,
  StepDescr,
  CookingPicture,
};
