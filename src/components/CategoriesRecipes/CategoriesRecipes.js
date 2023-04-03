import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipesByCategory } from 'services/soyummyAPI';

import { RecipesList } from 'components/RecipesList';

export const CategoriesRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const getData = async () => {
      const data = await getRecipesByCategory(categoryName);
      setRecipes(data.recipes);
    };
    getData();
  }, [categoryName]);

  return (
    <>
      <RecipesList items={recipes} />
    </>
  );
};
