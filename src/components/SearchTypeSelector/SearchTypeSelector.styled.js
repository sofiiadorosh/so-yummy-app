import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Text = styled.span`
  margin-right: 15px;
  color: '${props => props.theme.colors.tertiaryLightText}';
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    line-height: 1.29;
  }
`;
