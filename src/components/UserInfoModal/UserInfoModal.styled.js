import styled from 'styled-components';

const UserForm = styled.form`
  width: 330px;
  height: 327px;
  padding: 32px 24px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 402px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 425px;
    padding: 60px 50px;
  }
`;
const PictureField = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 88px;
  height: 88px;
  margin: 0 auto;
  margin-bottom: 54px;

  background-color: #d9d9d9;

  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 52px;
  }

  svg {
    stroke: #c4c4c4;
  }

  input,
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

  img {
     width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const PickButton = styled.button`
  position: absolute;
  bottom: -6px;
  right: 13px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  padding: 0;

  background-color: #8baa36;

  border: none;
  border-radius: 50%;
  outline: none;

  cursor: pointer;

  svg {
    fill: #fafafa;
  }
`;

const NameField = styled.div`
  position: relative;

  width: 100%;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  label {
    position: absolute;
    top: 15.41px;
    left: 14px;

    @media screen and (min-width: 768px) {
      left: 19px;
    }

    svg {
      width: 18px;
      height: 18px;

      stroke: ${props => props.theme.colors.primaryDarkText};

      @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  input {
    width: 100%;
    padding: 15.41px 39.5px 11.84px;

    font-family: inherit;
    font-weight: ${props => props.theme.fontWeights.regular};
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.primaryDarkText};
    background-color: transparent;

    border: 1px solid ${props => props.theme.colors.primaryDarkText};
    outline: none;
    border-radius: 6px;

    opacity: 0.3;

    @media screen and (min-width: 768px) {
      height: 58px;
      padding: 16.74px 50px 14.59px;
    }

    @media screen and (min-width: 1440px) {
      height: 59px;
      padding: 16px 50px;
    }
  }

  input:hover,
  input:focus {
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.blackText};
    border: 2px solid ${props => props.theme.colors.blackText};
  }
  button {
    position: absolute;
    top: 18px;
    right: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0;

    background-color: transparent;

    border: none;
    outline: none;

    cursor: pointer;

    @media screen and (min-width: 768px) {
      right: 18px;
    }

    svg {
      width: 17px;
      height: 17px;

      stroke: ${props => props.theme.colors.primaryDarkText};

      @media screen and (min-width: 768px) {
        width: 19px;
        height: 19px;
      }
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px 84px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.29;

  color: #fafafa;

  background-color: #8baa36;

  border: none;
  border-radius: 6px;
  outline: none;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #22252a;
  }

  @media screen and (min-width: 768px) {
    padding: 21px 143px;

    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.12;
  }

  @media screen and (min-width: 1440px) {
    padding: 21px 138px;
  }
`;

export { UserForm, PictureField, PickButton, NameField, SubmitButton };
