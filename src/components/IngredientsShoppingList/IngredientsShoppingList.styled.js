import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 32px;
  padding: 10px 10px;

  background-color: ${props => props.theme.colors.greenAccent};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 20px 20px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding: 21px 40px;
  }
`;

const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.5;

  color: ${props => props.theme.colors.primaryLightText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    letter-spacing: 0.03em;
  }
`;

const TitleRemoveWrap = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1440px) {
    gap: 142px;
  }
`;

const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 95.5%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    gap: 44px;

    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 1160px;
  }
`;
const IngredientsItem = styled.li`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0px 19px 24px 0px;

  border-bottom: 1px solid ${props => props.theme.colors.secondaryLightText};

  @media screen and (min-width: 768px) {
    padding: 0px 45px 43px 0px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0px 28px 43px 0px;
  }
`;

const ItemTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    border-radius: 8px;
    background-color: ${props => props.theme.colors.primaryGreenBackground};

    @media screen and (min-width: 768px) {
      width: 93px;
      height: 97px;
    }
  }

  img {
    object-fit: cover;
  }
`;

const IngredientsTitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.2;

  color: ${props => props.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[4]}px;
    line-height: 1.5;
  }
`;

const MeasureWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 46px;

  @media screen and (min-width: 768px) {
    gap: 110px;
  }
  @media screen and (min-width: 1440px) {
    gap: 174px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 37px;
    height: 23px;

    padding: 4px;

    font-weight: ${props => props.theme.fontWeights.semibold};
    font-size: ${props => props.theme.fontSizes[1]}px;
    line-height: 1.5;

    color: ${props => props.theme.colors.primaryLightText};
    background-color: ${props => props.theme.colors.greenAccent};
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      min-width: 68px;
      height: 35px;

      padding: 4px 8px;

      font-size: ${props => props.theme.fontSizes[3]}px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 14px;
    height: 14px;
    padding: 0;

    background-color: transparent;

    border: none;
    outline: none;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }

    svg {
      fill: #333333;
    }
  }
`;

export {
  TitleWrapper,
  Title,
  TitleRemoveWrap,
  IngredientsList,
  IngredientsItem,
  ItemTitleWrapper,
  IngredientsTitle,
  MeasureWrapper,
};
