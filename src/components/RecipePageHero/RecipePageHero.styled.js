import styled from 'styled-components';

import recipePageImgMob1x from '../../images/recipePage-desktop-1x.png';
import recipePageImgMob2x from '../../images/recipePage-desktop-2x.png';
import recipePageImgTab1x from '../../images/recipePage-laptop-1x.png';
import recipePageImgTab2x from '../../images/recipePage-laptop-2x.png';
import recipePageImgDesk1x from '../../images/recipePage-desktop-1x.png';
import recipePageImgDesk2x from '../../images/recipePage-desktop-2x.png';

const RecipeHeroWrapper = styled.div`
  text-align: center;
  background-image: url(${recipePageImgMob1x});
  padding: 80px 0 90px 0;
  background-size: cover;
  background-position: center;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${recipePageImgMob2x});
  }
  
  @media screen and (min-width: 768px) {
    background-image: url(${recipePageImgTab1x});
    padding: 72px 0 32px 0;
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${recipePageImgTab2x});
  }
  @media screen and (min-width: 1440px) {
    padding: 100px 0 32px 0;
    background-image: url(${recipePageImgDesk1x});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${recipePageImgDesk2x});
    }
  }
  div {
    max-width: 303px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 768px) {
      max-width: 506px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 656px;
    }
  }
`;

const RecipeTitle = styled.h1`
  margin: 0; //убрать позже
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[7]}px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.greenAccent};
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[10]}px;
    margin-bottom: 24px;
  }
`;
const RecipeDescription = styled.p`
  margin: 0; //убрать позже
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.darkAccent};
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;
const RecipeAddToFavotite = styled.button`
  display: inline-block;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  color: ${props => props.theme.colors.primaryDarkText};
  border-radius: 24px 44px;
  border: 1px solid ${props => props.theme.colors.greenAccent};;
  margin-bottom: 42px;
  padding: 10px 18px;
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.5;
  color: ${props => props.theme.colors.darkAccent};
  &:hover {
    background-color: ${props => props.theme.colors.greenAccent};;
    cursor: pointer;
    color: white;
  }
  @media screen and (min-width: 768px) {
    width: 278px;
    padding: 18px 44px;
    margin-bottom: 78px;
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
  @media screen and (min-width: 1440px) {
    width: 278px;
    margin-bottom: 48px;
  }
`;
const RecipeTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: ${props => props.theme.fontSizes[3]}px;
    margin-right: 4px;
    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes[6]}px;
      margin-right: 8px;
    }
  }
`;

const RecipeTime = styled.p`
  margin: 0;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.primaryDarkText};
  @media screen and (min-width: 768px) {
    ${props => props.theme.fontSizes[3]}px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export { RecipeTitle, RecipeHeroWrapper, RecipeDescription , RecipeAddToFavotite, RecipeTimer, RecipeTime };