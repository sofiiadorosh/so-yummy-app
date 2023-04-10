import axios from 'axios';
import MediaQuery from 'react-responsive';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { FollowUs } from 'components/FollowUs';

import {
  Image,
  ItemText,
  ItemTitle,
  ItemWrapper,
  ListItemPopular,
  ListLinkPopular,
  ListPopular,
  TitlePopular,
  WrapperPopular,
  ErrorMessage,
} from './PopularRecipe.styled';


export const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  // useEffect(() => {
  //   const popularRecipes = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://soyummy-tw3y.onrender.com/api/v1/popular-recipes'
  //       );
  //       const { data } = response.data;

  //       if (response) {
  //         setLoading(false);
  //         setRecipes(data);
  //       }
  //     } catch {
  //       setError('Failed to fetch');
  //       setRecipes([]);
  //     }
  //   };
  //   popularRecipes();
  // }, []);

  return (
    <WrapperPopular>
      <MediaQuery minWidth={1440}>
        <TitlePopular>Follow us</TitlePopular>
        <FollowUs />
      </MediaQuery>
      <TitlePopular>Popular recipe</TitlePopular>
      {
        <ListPopular>
          {recipes.map(({ _id, title, description, preview }) => (
            <ListItemPopular key={_id}>
              <ListLinkPopular to={`/recipe/${_id}`} state={{ from: location }}>
                <Image src={preview} alt="recipe-appearance" />
                <ItemWrapper>
                  <ItemTitle>{title}</ItemTitle>
                  <ItemText>{description}</ItemText>
                </ItemWrapper>
              </ListLinkPopular>
            </ListItemPopular>
          ))}
        </ListPopular>
      }
      {error && !loading && (
        <ErrorMessage>Nothing! Reload the page...</ErrorMessage>
      )}
      {loading && <Loader />}
    </WrapperPopular>
  );
};