import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ChooseBlock = styled.div`
  width: 225px;
  height: 92px;
  background-color: ${props => props.theme.colors.whiteText};
  border-radius: 8px;
  padding: 8px;
  margin-left: 88px;
  margin-bottom: 115px;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    padding: 12px;
    line-height: 20px;
    letter-spacing: -0.24px;
    width: 261px;
    height: 100px;
    position: absolute;
    right: 25px;
    top: 392px;
  }
  @media (min-width: 1440px) {
    line-height: 20px;
    padding: 16px;
    width: 298px;
    height: 114px;
    position: absolute;
    right: 120px;
    top: 462px;
  }
`;

const ChooseText = styled.p`
  
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 18px;
  letter-spacing: '-0.24px';
  color: ${props => props.theme.colors.secondaryDarkText};
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 18px;
  }
  @media (min-width: 1440px) {
    line-height: 20px;
  }
`;

const ChooseSpan = styled.span`
  color: ${props => props.theme.colors.greenAccent};
  
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 18px;
  letter-spacing: '-0.24px';
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
  @media (min-width: 1440px) {
    line-height: 20px;
  }
`;
const ChooseLink = styled(NavLink)`
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 12px;
  letter-spacing: '-0.02em';
  color: ${props => props.theme.colors.secondaryDarkText};
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
  @media (min-width: 1440px) {
    line-height: 20px;
  }
`;

const RightArrow = styled.svg`
  width: 18px;
  height: 18px;
  margin-left: 4px;
  display: flex;
  stroke: ${props => props.theme.colors.secondaryDarkText};
  &:hover {
    transform: scale(1.2);
  }
`;
export { RightArrow, ChooseLink, ChooseSpan, ChooseText, ChooseBlock };