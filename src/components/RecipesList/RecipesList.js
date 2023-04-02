import { RecipesItem } from 'components/RecipesItem';

import { Recipes } from './RecipesList.styled';

export const RecipesList = ({ items }) => {
  return (
    <Recipes>
      {items.map(item => (
        <RecipesItem key={item._id} item={item} />
      ))}
    </Recipes>
  );
};
