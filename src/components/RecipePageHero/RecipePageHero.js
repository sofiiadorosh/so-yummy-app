import { AiOutlineClockCircle } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';

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

export const RecipePageHero = ({ title, description, time, id, location }) => {
  const [favorite, setFavorite] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getFavorites = async () => {
      const data = await getAllFavorites();
      setFavorite(data);
    };
    getFavorites();
  }, []);

  useEffect(() => {
    setIsFavorite(favorite.some(recipe => recipe._id === id));
  }, [favorite, id]);

  const favoriteHandler = async id => {
    try {
      if (isFavorite) {
        await deleteFromFavorite(id);
        setIsFavorite(prevState => !prevState);
        return;
      }
      await addToFavorite(id);
      setIsFavorite(prevState => !prevState);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <RecipeHeroWrapper>
      <Container>
        <RecipeTitle>{title}</RecipeTitle>
        <RecipeDescription>{description}</RecipeDescription>
        {location !== '/my' && (
          <RecipeAddToFavotite
            type="button"
            onClick={() => {
              favoriteHandler(id);
            }}
          >
            {isFavorite
              ? 'Delete from favorite recipes'
              : 'Add to favorite recipes'}
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
