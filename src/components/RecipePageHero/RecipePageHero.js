import { AiOutlineClockCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import Notiflix from 'notiflix';

import { addToFavorite, deleteFromFavorite } from 'services/soyummyAPI';

import {
  RecipeHeroWrapper,
  Container,
  RecipeTitle,
  RecipeDescription,
  RecipeAddToFavotite,
  RecipeTimer,
  RecipeTime,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ title, description, time, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavorite = () => {
    addToFavorite(id)
      .then(res => {
        console.log(res);
        // if (!res) {
        //   Notiflix.Notify.warning(
        //     `Неможливо додати рецепт по якійсь причині...`
        //   );
        //   return;
        // } else {
        //   setIsFavorite(true);
        //   Notiflix.Notify.warning(`Added to favorite!`);
        // }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const deleteFavorite = () => {
    deleteFromFavorite(id)
      .then(res => {
        console.log(res);
        if (!res) {
          Notiflix.Notify.warning(
            `Неможливо видалити рецепт по якійсь причині...`
          );
          return;
        }
        setIsFavorite(false);
        Notiflix.Notify.warning(`Removed from favorite!`);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <RecipeHeroWrapper>
      <Container>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>

        {isFavorite === false && (
          <RecipeAddToFavotite
            type="button"
            onClick={() => {
              addFavorite();
            }}
          >
            Add to favorite recipes
          </RecipeAddToFavotite>
        )}

        {isFavorite === true && (
          <RecipeAddToFavotite
            type="button"
            onClick={() => {
              deleteFavorite();
            }}
          >
            Delete favorite recipes
          </RecipeAddToFavotite>
        )}

        <RecipeTimer>
          <AiOutlineClockCircle />
          <RecipeTime>{time}min</RecipeTime>
        </RecipeTimer>
      </Container>
    </RecipeHeroWrapper>
  );
};
