import { NavLink, useLocation } from 'react-router-dom';

import { Recipe, RecipeWrapper, RecipeDescr } from './RecipesItem.styled';

export const RecipesItem = ({ item: { _id, title, thumb } }) => {
  const location = useLocation();

  return (
    <Recipe>
      <NavLink to={`/recipe/${_id}`} state={{ from: location }}>
        <RecipeWrapper>
          <img src={thumb} alt={title} />
          <RecipeDescr>
            <p>{title}</p>
          </RecipeDescr>
        </RecipeWrapper>
      </NavLink>
    </Recipe>
  );
};
