import { useEffect, useState } from 'react';

import { getCategoryRecipes } from 'services/soyummyAPI';

import { RecipesList } from 'components/RecipesList';
import { Loader } from 'components/Loader';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let quantity = 4;
    if (window.innerWidth < 768) {
      quantity = 1;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      quantity = 2;
    } else {
      quantity = 4;
    }
    const getData = async () => {
      try {
        const data = await getCategoryRecipes(quantity);
        setCategoryRecipes(data.recipes);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, []);

  return (
    <CategoriesSection>
      <Container>
        <CategoriesRecipes>
          {isLoading && <Loader />}
          {categoryRecipes.length > 0 &&
            categoryRecipes.map(({ title, recipes }) => (
              <Category key={title}>
                <Title>{title}</Title>
                <RecipesList items={recipes} />
                <SeeAllButton
                  to={
                    title === 'Desserts'
                      ? '/categories/dessert'
                      : `/categories/${title.toLowerCase()}`
                  }
                >
                  See all
                </SeeAllButton>
              </Category>
            ))}
          {error && <p>Whoops, something went wrong...</p>}
        </CategoriesRecipes>
        <OtherButton to="/categories/beef">Other categories</OtherButton>
      </Container>
    </CategoriesSection>
  );
};
