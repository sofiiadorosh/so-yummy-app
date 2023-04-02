import { NavLink } from 'react-router-dom';

import { Recipe, RecipeWrapper, RecipeDescr } from './RecipesItem.styled';

export const RecipesItem = ({ item: { _id, title, thumb } }) => {
  return (
    <Recipe>
      <NavLink to={`/recipes/${_id}`}>
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
