import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipesById } from 'services/soyummyAPI';

import { RecipePageHero } from 'components/RecipePageHero';
import { RecipeIngredientsList } from 'components/RecipeIngredientsList';
import { RecipePreparation } from 'components/RecipePreparation';

export const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getRecipesById(recipeId);
        console.log(data.recipe);
        setRecipe(data.recipe);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [recipeId]);

  if (!recipe) {
    return;
  }

  const { description, time, title, _id, favorite } = recipe;

  return (
    <main>
      {recipe && (
        <>
          <RecipePageHero
            title={title}
            description={description}
            time={time}
            favorite={favorite}
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
