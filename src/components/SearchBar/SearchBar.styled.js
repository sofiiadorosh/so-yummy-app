import styled from 'styled-components';

const SearchBlock = styled.div`
  width: 295px;
  height: 52px;
  background-color: '1px solid ${props => props.theme.colors.formBackground}';
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  margin: 0 16px 83px;
  border: '1px solid ${props => props.theme.colors.formBackground}';
  color: '${props => props.theme.colors.tertiaryLightText}';

  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.5;
  position: relative;
  @media (min-width: 768px) {
    width: 369px;
    height: 59px;
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
    margin: 0 16px 195px;
  }
  @media (min-width: 1440px) {
    width: 510px;
    height: 71px;
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
  }
`;

const SearchInForm = styled.form`
  display: flex;
  justify-content: flex-end;
  border-radius: 30px, 80px;
  height: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 80px;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 30px;
  border: 1px solid ${props => props.theme.colors.formBackground};
  background-color: ${props => props.theme.colors.lightBackground};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.5;
  padding-left: 32px;
  color: '${props => props.theme.colors.tertiaryLightText}';
  @media (min-width: 768px) {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
  }
  &:hover {
    border: none;
    outline: none;
  }
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
    color: '${props => props.theme.colors.tertiaryLightText}';
  }
`;

export { SearchInput, SearchInForm, SearchBlock };
