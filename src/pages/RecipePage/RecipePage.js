import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';

import { getRecipesById } from 'services/soyummyAPI';

import { RecipePageHero } from 'components/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getRecipesById(recipeId);
        setRecipe(data.recipe);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [recipeId]);

  if (!recipe) {
    return;
  }

  return (
    <main>
      {isLoading && <Loader />}
      {recipe && !isLoading && (
        <>
          <RecipePageHero item={recipe} />
          <RecipeIngredientsList ingredients={recipe.ingredients} />
          <RecipePreparation />
        </>
      )}
      {error && <p>Whoops, something went wrong...</p>}
    </main>
  );
};
