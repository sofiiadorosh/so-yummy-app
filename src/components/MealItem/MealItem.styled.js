import styled from 'styled-components';

const CardContainer = styled.li`
  position: relative;
  width: 288px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  width: 343px;
  height: 323px;
 
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const CardTitle = styled.p`
  position: absolute;
  bottom: 26px;
  left: 18px;
  width: 256px;
  height: 52px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.whiteText};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.secondaryDarkText};
  width: 307px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
  @media screen and (min-width: 1440px) {
    bottom: 23px;
    left: 16px;
    width: 268px;
  }
`;
export { CardContainer, Image, CardTitle };