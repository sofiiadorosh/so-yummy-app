import { useEffect, useState } from 'react';

import { getCategoryRecipes } from 'services/soyummyAPI';

import { RecipesList } from 'components/RecipesList';

import {
  CategoriesSection,
  Container,
  CategoriesRecipes,
  Title,
  Category,
  SeeAllButton,
  OtherButton,
} from './PreviewCategories.styled';

export const PreviewCategories = () => {
  const [categoryRecipes, setCategoryRecipes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCategoryRecipes(4);
      setCategoryRecipes(data.recipes);
    };
    getData();
  }, []);

  return (
    <CategoriesSection>
      <Container>
        <CategoriesRecipes>
          {categoryRecipes.map(({ title, recipes }) => (
            <Category key={title}>
              <Title>{title}</Title>
              <RecipesList items={recipes} />
              <SeeAllButton to={`/categories/${title.toLowerCase()}`}>
                See all
              </SeeAllButton>
            </Category>
          ))}
        </CategoriesRecipes>
        <OtherButton to="/categories/beef">Other categories</OtherButton>
      </Container>
    </CategoriesSection>
  );
};
