import { Outlet } from 'react-router-dom';

import { MainPageTitle } from 'components/MainPageTitle';
import { CategoriesList } from 'components/CategoriesList';
import { Square } from 'components/Square';

import { CategoriesSection, Container, Title } from './CategoriesPage.styled';

export const CategoriesPage = () => {
  return (
    <CategoriesSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="Categories" />
        </Title>
        <CategoriesList />
        <Outlet />
      </Container>
    </CategoriesSection>
  );
};
