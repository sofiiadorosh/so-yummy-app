import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const SearchBlock = styled.div`
  width: 295px;
  height: 52px;
  background-color: '1px solid ${props => props.theme.colors.formBackground}';
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  margin: 0 16px 24px;
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
    margin: 0 16px 28px;
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
  padding: 0px 0px 0px 32px;
  color: '${props => props.theme.colors.tertiaryLightText}';
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    border: 1px solid transparent;
    outline: transparent;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  }
  &:active {
    border: 1px solid transparent;
    outline: transparent;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  }
  &:focus {
    border: 1px solid transparent;
    outline: transparent;
    box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  }
  &::placeholder {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
    color: '${props => props.theme.colors.tertiaryLightText}';
  }
  @media (min-width: 768px) {
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
  }
`;

const ButtonSearch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  width: 113px;
  height: 52px;
  background-color: ${props => props.theme.colors.greenAccent};
  border-radius: 24px 44px;
  border: none;
  color: ${props => props.theme.colors.primaryLightText};
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: 1.5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.quaternaryDarkText};
  }
  @media screen and (min-width: 768px) {
    width: 161px;
    height: 59px;
    left: 210px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
    height: 70px;
    left: 350px;
  }
`;

export { Container, SearchInput, SearchInForm, SearchBlock, ButtonSearch };
