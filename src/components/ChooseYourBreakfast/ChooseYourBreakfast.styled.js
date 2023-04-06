import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ChooseBlock = styled.div`
  width: 225px;
  padding: 8px;

  background-color: #fafafa;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 261px;
    padding: 12px;
  }

  @media screen and (min-width: 1440px) {
    width: 298px;
    padding: 16px;
  }
`;

const ChooseDescr = styled.p`
  margin-bottom: 4px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.5;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.29;
  }

  @media screen and (min-width: 1440px) {
    line-height: 1.43;
  }
`;

const ChooseAccent = styled.span`
  color: ${props => props.theme.colors.greenAccent};
`;
const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;

  span {
    ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[1]}px;
    line-height: 1.2;
    letter-spacing: 0.2px;

    color: ${props => props.theme.colors.secondaryDarkText};
  }

  svg {
    fill: ${props => props.theme.colors.secondaryDarkText};
  }
`;

export { ChooseBlock, ChooseDescr, ChooseAccent, StyledLink };
