import styled from 'styled-components';

const ItemWrap = styled.div`
  border-radius: 8px;
  padding: 25px;
  background-color: ${props => props.theme.colors.whiteBackground};
  margin-bottom: 20px;
`;

const PicterItem = styled.img`
  height: 124px;
  width: 124px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;
const ItemBox = styled.div`
  position: relative;
  margin-left: 14px;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 54px;
  }
`;

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
`;

const ItemBoxDescript = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 8px;
  color: ${props => props.theme.colors.primaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;
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
`;
const LogoTrash = styled.button`
  position: absolute;
  top: 0;
  right: 0;

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
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }

  & > img {
    width: 14px;
    height: 14px;
    stroke: #fafafa;

    @media screen and (min-width: 768px) {
      width: 22px;
      height: 22px;
    }
    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
const ItemBoxButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 87px;
  height: 27px;

  background-color: ${props => props.theme.colors.greenAccent};
  color: ${props => props.theme.colors.primaryLightText};

  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 10px;

  border-radius: 24px 44px;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 135px;
    height: 45px;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    width: 172px;
    height: 59px;
    font-size: 16px;
  }
`;

export {
  ItemWrap,
  PicterItem,
  ItemBox,
  ItemBoxTitle,
  ItemBoxDescript,
  ItemBoxTime,
  LogoTrash,
  ItemBoxButton,
};
