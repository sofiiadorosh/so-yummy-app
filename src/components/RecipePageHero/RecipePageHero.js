import { AiOutlineClockCircle } from 'react-icons/ai';

import {
  RecipeHeroWrapper,
  Container,
  RecipeTitle,
  RecipeDescription,
  RecipeAddToFavotite,
  RecipeTimer,
  RecipeTime,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ item: { title, description, time } }) => {
  return (
    <RecipeHeroWrapper>
      <Container>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
        <RecipeAddToFavotite>Add to favorite recipes</RecipeAddToFavotite>
        <RecipeTimer>
          <AiOutlineClockCircle />
          <RecipeTime>{time}min</RecipeTime>
        </RecipeTimer>
      </Container>
    </RecipeHeroWrapper>
  );
};
