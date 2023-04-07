import styled from 'styled-components';

const PicterItem = styled.img`
  min-width: 124px;

  @media screen and (min-width: 768px) {
    min-width: 228px;
    min-height: 232px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 318px;
    min-height: 324px;
  }
`
const ItemBox = styled.div`
  position: relative;
  margin-left: 14px;
  /* display: block; */

  @media screen and (min-width: 768px) {
   margin-left: 24px;
  }
  @media screen and (min-width: 1440px) {
   margin-left: 54px;
  }
`

const ItemBoxTitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryDarkText};

  margin-top: 6px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 0px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 40px;
  }
`

const ItemBoxText = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 8px;
  color: ${props => props.theme.colors.primaryDarkText};


  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`
const ItemBoxTime = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 10px;
  color: ${props => props.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
const LogoTrash = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  background-color: ${props => props.theme.colors.greenAccent};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  &>img{
    width: 14px;
    height: 14px;

    stroke: #fafafa;
  }
`


export {
  PicterItem,
  ItemBox,
  ItemBoxTitle,
  ItemBoxText,
  ItemBoxTime,
  LogoTrash
}