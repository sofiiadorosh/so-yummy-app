import { AiOutlineClockCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import Notiflix from 'notiflix';

import {
  addToFavorite,
  deleteFromFavorite,
  getAllFavorites,
} from 'services/soyummyAPI';

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

  const addFavorite = async () => {
    try {
      const favorites = await getAllFavorites();
      console.log(favorites);
      if (favorites.some(favorite => favorite._id === id)) {
        Notiflix.Notify.warning(`Recipe is already in favorites`);
        setIsFavorite(true);
      } else {
        const newFavorite = await addToFavorite(id);
        console.log(newFavorite);
        if (!newFavorite) {
          Notiflix.Notify.warning(`Internal error`);
        } else {
          setIsFavorite(true);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteFavorite = () => {
    deleteFromFavorite(id)
      .then(res => {
        console.log(res);
        if (!res) {
          return;
        }
        setIsFavorite(false);
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
