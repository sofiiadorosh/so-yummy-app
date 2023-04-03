import { MainPageTitle } from 'components/MainPageTitle';
import { SearchBar } from 'components/SearchBar';
import { SearchedRecipesList } from 'components/SearchedRecipesList';
import { Square } from 'components/Square';

import { CategoriesSection, Container, Title } from './SearchPage.slyled';

export const SearchPage = () => {
  return (
    <>
      <CategoriesSection>
        <Container>
          <Square />
          <Title>
            <MainPageTitle title="Search" />
          </Title>
          <SearchBar />
          <SearchedRecipesList />
        </Container>
      </CategoriesSection>
    </>
  );
};
