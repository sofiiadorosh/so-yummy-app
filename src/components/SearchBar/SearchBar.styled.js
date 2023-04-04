import styled from 'styled-components';

const WrapperForm = styled.form`
  position: relative;

  border: 1px solid black;
  width: 295px;
  height: 53px;
  border-top-left-radius: 18px 18px;
  border-bottom-left-radius: 44px 44px;
  border-bottom-right-radius: 18px 18px;
  border-top-right-radius: 44px 44px;
  background-color: green;

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 57px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 71px;
  }
`;

const Input = styled.input`
  font-size: 12px;
  line-height: 1.5;
  padding: 0 20px;
  outline: none;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  width: 113px;
  height: 53px;
  font-size: 14px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 57px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 71px;
  }
`;

export { WrapperForm, Input, ButtonWrapper };
