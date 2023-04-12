import styled from 'styled-components';

const Form = styled.form`
  margin-top: 32px;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 204px;
  gap: 8px;
  .icon {
    position: absolute;
    top: 13px;
    left: 14px;
    width: 16px;
    height: 12px;
    fill: ${({ color }) => color};
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 16px;
      top: 16px;
      left: 180px;
    }
    @media screen and (min-width: 1440px) {
      top: 126px;
      left: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    justify-content: center;
    width: 100%;
    gap: 12px;
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-left: 235px;
    gap: 0;
    flex-direction: column;
    width: 339px;
  }

  .error {
    position: absolute;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 21px;
    color: #e74a3b;
    top: -20px;
    left: 0;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      top: -23px;
      left: 165px;
    }
    @media screen and (min-width: 1440px) {
      top: 82px;
      left: 0;
    }
  }
`;

const FormInput = styled.input`
  width: 204px;
  height: 38px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.whiteText};
  background-color: transparent;
  border-radius: 6px;
  padding-left: 42px;
  padding-right: 38px;
  border: 1px solid ${({ borderColor }) => borderColor};
  outline: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  svg {
    position: absolute;
    width: 16px;
    height: 12px;
    top: 0;
    top: 13px;
    left: 14px;
    fill: ${props => props.theme.colors.lightBackground};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 16px;
      top: 18px;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media screen and (min-width: 1440px) {
      top: 20px;
    }
  }
  :-webkit-autofill {
    transition: background-color 250s linear, color 250s linear;
  }
  @media screen and (min-width: 768px) {
    width: 259px;
    height: 50px;
    padding-left: 51px;
    font-size: 14px;
    line-height: 1.5;
  }
  @media screen and (min-width: 1440px) {
    width: 338px;
    padding-left: 51px;
    height: 59px;
  }
  :hover,
  :focus {
    border: 1px solid 1px solid ${({ color }) => color};
    &::placeholder {
      opacity: 1;
    }
  }
  &:hover ~ svg.icon use {
    opacity: 1;
  }
  ::placeholder {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.primaryLightText};
    opacity: 0.8;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;
const FormBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 71px;
  gap: 8px;
  width: 204px;
  cursor: pointer;
  height: 38px;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme.colors.footerLink};
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.primaryLightText};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    width: 171px;
    height: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    height: 60px;
    font-size: 16px;
    width: 100%;
    line-height: 1.13;
  }
  :hover:not([disabled]),
  :focus:not([disabled]) {
    color: ${props => props.theme.colors.darkAccent};
  }
  &[disabled] {
    opacity: 0.7;
  }
`;
const FormWrapText = styled.div`
  margin-bottom: 28px;
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: ${props => props.theme.colors.darkAccent};
    margin-bottom: 14px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.primaryLightText};
  }
`;
const ErrorEmail = styled.p`
  color: #e74a3b;
  margin-top: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
`;

const FlagForInput = styled.div`
  position: absolute;
  top: 11px;
  right: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 355px;
  }

  @media screen and (min-width: 1440px) {
    top: 126px;
    right: 12px;
  }
`;
export { Form, FormInput, FormBtn, FormWrapText, FlagForInput, ErrorEmail };
