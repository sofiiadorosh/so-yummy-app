import styled from 'styled-components';

export const TitlePreparation = styled.h3`
  margin-bottom: 24px;
  color: ;
  font-weight: ;
  text-align: start;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
  }
`;

export const TextAreaPreparation = styled.textarea`
  padding-top: 10px;
  padding-left: 16px;
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 505px;
  }
`;
export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top:18px;
  right: 25px;
  width: 113px;
  height: 52px;
  background-color:#22252A;
  color:#fff;
  border-radius: 24px 44px;
  border: none;
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;