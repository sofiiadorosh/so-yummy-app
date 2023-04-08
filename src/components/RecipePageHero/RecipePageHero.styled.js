import styled from 'styled-components';

import recipePageImgMob1x from '../../images/recipePage-mobile-1x.png';
import recipePageImgMob2x from '../../images/recipePage-mobile-2x.png';
import recipePageImgTab1x from '../../images/recipePage-laptop-1x.png';
import recipePageImgTab2x from '../../images/recipePage-laptop-2x.png';
import recipePageImgDesk1x from '../../images/recipePage-desktop-1x.png';
import recipePageImgDesk2x from '../../images/recipePage-desktop-2x.png';

const RecipeHeroWrapper = styled.div`
  padding: 144px 0 90px;

  background-image: url(${recipePageImgMob1x});
  background-size: cover;
  background-position: bottom;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${recipePageImgMob2x});
  }

  @media screen and (min-width: 768px) {
    padding: 136px 0 32px;

    background-image: url(${recipePageImgTab1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${recipePageImgTab2x});
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 164px 0 32px;

    background-image: url(${recipePageImgDesk1x});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${recipePageImgDesk2x});
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

const RecipeTitle = styled.h1`
  margin-bottom: 18px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[7]}px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${props => props.theme.colors.greenAccent};

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    font-size: ${props => props.theme.fontSizes[10]}px;
  }
`;

const RecipeDescription = styled.p`
  width: 299px;
  margin-bottom: 24px;

  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  text-align: center;

  color: ${props => props.theme.colors.darkAccent};

  @media screen and (min-width: 768px) {
    width: 506px;

    font-size: ${props => props.theme.fontSizes[5]}px;
  }

  @media screen and (min-width: 1440px) {
    width: 656px;

    margin-bottom: 30px;
  }
`;

const RecipeAddToFavotite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 35px;
  margin-bottom: 42px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.5;

  background-color: transparent;

  border-radius: 24px 44px;
  border: 1px solid ${props => props.theme.colors.greenAccent};
  outline: none;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: ${props => props.theme.colors.whiteText};
    background-color: ${props => props.theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    width: 278px;
    height: 59px;
    margin-bottom: 60px;

    font-size: ${props => props.theme.fontSizes[4]}px;
  }

  @media screen and (min-width: 1440px) {
    width: 270px;
    margin-bottom: 48px;
  }
`;

const RecipeTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  svg {
    width: 14px;
    height: 14px;
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

const RecipeTime = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.4;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.primaryDarkText};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.43;
  }
`;
export {
  RecipeTitle,
  Container,
  RecipeHeroWrapper,
  RecipeDescription,
  RecipeAddToFavotite,
  RecipeTimer,
  RecipeTime,
};
