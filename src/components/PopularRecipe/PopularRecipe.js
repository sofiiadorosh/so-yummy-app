import { useState, useEffect } from 'react';
import EllipsisText from 'react-ellipsis-text';

import { getPopularRecipes } from 'services/soyummyAPI';

import { Loader } from 'components/Loader/Loader';
import { SocialLinks } from '../Footer/SocialLinks/SocialLinks';

import {
  ItemImg,
  ItemText,
  ItemTitle,
  ItemWrapper,
  ListItemPopular,
  ListLinkPopular,
  ListPopular,
  TitlePopular,
  TitleFollowUS,
  FollowWrapper,
  Wrapper,
  PopularWrapper,
} from './PopularRecipe.styled';

export const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const data = await getPopularRecipes();
        setRecipes(data.recipes);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, []);

  return (
    <Wrapper>
      <FollowWrapper>
        <TitleFollowUS>Follow us</TitleFollowUS>
        <SocialLinks />
      </FollowWrapper>
      <PopularWrapper>
        <TitlePopular>Popular recipe</TitlePopular>
        {
          <ListPopular>
            {recipes.map(({ _id, title, description, preview }) => (
              <ListItemPopular key={_id}>
                <ListLinkPopular to={`/recipe/${_id}`}>
                  <ItemImg src={preview} alt="recipe-appearance" />
                  <ItemWrapper>
                    <ItemTitle>{title}</ItemTitle>
                    <ItemText>
                      <EllipsisText text={description} length={'64'} />
                    </ItemText>
                  </ItemWrapper>
                </ListLinkPopular>
              </ListItemPopular>
            ))}
          </ListPopular>
        }
        {error && !loading && <p>Something wrong! Reload the page please...</p>}
        {loading && <Loader />}
      </PopularWrapper>
    </Wrapper>
  );
};
