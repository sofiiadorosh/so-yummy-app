import styled from 'styled-components';

export const PageTitle = styled.h1`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[8]}px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  text-align: left;

  color: ${props => props.theme.colors.tertiaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[9]}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[10]}px;
  }
`;
