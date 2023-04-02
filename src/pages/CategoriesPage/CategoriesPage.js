import { useState, useEffect } from 'react';

import { getRecipesByCategory } from 'services/soyummyAPI';

import { MainPageTitle } from 'components/MainPageTitle';
import { RecipesList } from 'components/RecipesList';
import { Square } from 'components/Square';

import { CategoriesSection, Container, Title } from './CategoriesPage.styled';

export const CategoriesPage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getRecipesByCategory('beef');
      setRecipes(data.recipes);
    };
    getData();
  }, [recipes]);

  return (
    <CategoriesSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="Categories" />
        </Title>
        <RecipesList items={recipes} />
      </Container>
    </CategoriesSection>
  );
};
