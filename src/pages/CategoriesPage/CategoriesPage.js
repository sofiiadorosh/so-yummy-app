import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getRecipesByCategory } from 'services/soyummyAPI';

import { MainPageTitle } from 'components/MainPageTitle';
import { CategoriesList } from 'components/CategoriesList';
import { Square } from 'components/Square';
import { RecipesList } from 'components/RecipesList';
import { Loader } from 'components/Loader';

import { CategoriesSection, Container, Title } from './CategoriesPage.styled';

export const CategoriesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await getRecipesByCategory(categoryName);
        setRecipes(data.recipes);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [categoryName]);

  return (
    <CategoriesSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="Categories" />
        </Title>
        <CategoriesList />
        {isLoading && <Loader />}
        {recipes.length > 0 && !isLoading && <RecipesList items={recipes} />}
        {error && <p>Whoops, something went wrong...</p>}
      </Container>
    </CategoriesSection>
  );
};
