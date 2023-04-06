import styled from 'styled-components';

const SearchBar = styled.form`
  position: relative;

  width: 295px;

  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 369px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
  }
`;

const SearchField = styled.div`
  label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  input {
    width: 100%;
    padding: 17px 113px 17px 32px;

    font-family: inherit;

    background-color: #fafafa;

    border: 1px solid #f0f0f0;

    border-top-left-radius: 30px;
    border-bottom-left-radius: 80px;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 30px;

    outline: none;

    @media screen and (min-width: 768px) {
      padding: 18px 161px 18px 38px;
    }

    @media screen and (min-width: 1440px) {
      padding: 23px 161px 23px 48px;
    }

    &::placeholder {
      font-weight: ${props => props.theme.fontWeights.regular};
      font-size: ${props => props.theme.fontSizes[3]}px;
      line-height: 1.5;

      color: ${props => props.theme.colors.tertiaryLightText};

      @media screen and (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes[4]}px;
      }
    }
  }
`;

export { SearchBar, SearchField };
