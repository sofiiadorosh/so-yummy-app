import styled from 'styled-components';

export const TitlePreparation = styled.h3`
  margin-bottom: 24px;
  color: ${props => props.theme.colors.secondaryDarkText};
  font-family:'Poppins';
  font-weight: 600 ;
  font-size: 24px;
  text-align: start;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    line-height: 1;
    letter-spacing: -0.24px;
  }
`;

export const TextAreaPreparation = styled.textarea`
  padding-top: 10px;
  padding-left: 16px;
  width: 343px;
  height:154px;
  color:#000000;
  font-family:'Poppins';
  font-weight:400;
  font-size:14px;
  letter-spacing:-0.02em;
  background:#F5F5F5;
  border: none;
  @media screen and (min-width: 768px) {
    min-width: 505px;
    min-height:224px;
    max-width: 505px;
    max-height: 224px;
  }
`;
