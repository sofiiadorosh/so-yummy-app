import styled from 'styled-components';

const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[12]}px;
  line-height: 1;
  letter-spacing: -0.005em;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[13]}px;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[14]}px;
  }
`;

const AccentTitle = styled.span`
  color: ${props => props.theme.colors.greenAccent};
`;

const BlackTitle = styled.span`
  color: ${props => props.theme.colors.quaternaryDarkText};
`;

export { Title, AccentTitle, BlackTitle };
