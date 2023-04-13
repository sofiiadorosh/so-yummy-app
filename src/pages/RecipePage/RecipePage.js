import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getRecipesById, getMyRecipeById } from 'services/soyummyAPI';

import { RecipePageHero } from 'components/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const { state } = useLocation();
  const location = state?.from?.pathname;
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location === '/my') {
      const getData = async () => {
        try {
          const data = await getMyRecipeById(recipeId);
          setRecipe(data.recipe);
        } catch (error) {
          setError(error);
        }
      };
      getData();
      return;
    }
    const getData = async () => {
      try {
        const data = await getRecipesById(recipeId);
        setRecipe(data.recipe);
      } catch (error) {
        setError(error);
      }
    };
    getData();
  }, [recipeId, location]);

  if (!recipe) {
    return;
  }

  const { description, time, title, _id } = recipe;

  return (
    <main>
      {recipe && (
        <>
          <RecipePageHero
            location={location}
            title={title}
            description={description}
            time={time}
            id={_id}
          />
          <RecipeIngredientsList ingredients={recipe.ingredients} />
          <RecipePreparation item={recipe} />
        </>
      )}
      {error && <p>Whoops, something went wrong...</p>}
    </main>
  );
};
