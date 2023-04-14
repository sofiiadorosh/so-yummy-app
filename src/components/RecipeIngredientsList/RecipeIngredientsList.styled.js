import styled from 'styled-components';

const SectionIngredients = styled.section`
  margin-bottom: 50px;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 96px;
    padding-top: 50px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 24px;
  padding: 12px 14px;

  background-color: ${props => props.theme.colors.greenAccent};
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    padding: 21px 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
    padding: 21px 40px;
  }
`;

const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.5;
  letter-spacing: 0.03em;

  color: ${props => props.theme.colors.primaryLightText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`;

const TitleAddWrap = styled.div`
  display: flex;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 38px;
  }

  @media screen and (min-width: 1440px) {
    gap: 109px;
  }
`;

const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

const IngredientsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10.5px 29px 10.5px 10px;

  background-color: ${props => props.theme.colors.secondaryGreenBackground};

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 16px 58px 16px 24px;
  }

  @media screen and (min-width: 1440px) {
    padding: 1px 70px 1px 32px;
  }
`;

const ItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 65px;
    height: 65px;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      width: 144px;
      height: 146px;
    }

    @media screen and (min-width: 1440px) {
      width: 180px;
      height: 180px;
    }
  }
`;

const IngredientsTitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.17;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.secondaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[7]}px;
    line-height: 1;
  }
`;

const MeasureWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 78px;
  }

  @media screen and (min-width: 1440px) {
    gap: 151px;
  }

  p {
    padding: 4px;

    font-weight: ${props => props.theme.fontWeights.semibold};
    font-size: ${props => props.theme.fontSizes[1]}px;
    line-height: 1.5;

    color: ${props => props.theme.colors.primaryLightText};
    background-color: ${props => props.theme.colors.greenAccent};

    border-radius: 4px;

    @media screen and (min-width: 768px) {
      padding: 3.5px 12px;

      font-size: ${props => props.theme.fontSizes[5]}px;
    }
  }

  input {
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

    &:checked + span > svg {
      opacity: 1;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 18px;
    height: 18px;

    border: 1px solid rgba(126, 126, 126, 0.5);
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;

      border-width: 2px;
    }

    svg {
      width: 14px;
      height: 14px;

      cursor: pointer; 
      
      fill: ${props => props.theme.colors.greenAccent};

      opacity: 0;

      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

      @media screen and (min-width: 768px) {
        width: 31px;
        height: 31px;
      }
    }
  }
`;

export {
  SectionIngredients,
  Container,
  TitleWrapper,
  Title,
  TitleAddWrap,
  IngredientsTitle,
  ItemTitleWrapper,
  MeasureWrapper,
  IngredientsList,
  IngredientsItem,
};
