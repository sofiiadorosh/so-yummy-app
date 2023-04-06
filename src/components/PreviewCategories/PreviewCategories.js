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
    let quantity = 4;
    if (window.innerWidth < 768) {
      quantity = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      quantity = 2;
    } else {
      quantity = 4;
    }
    const getData = async () => {
      const data = await getCategoryRecipes(quantity);
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
