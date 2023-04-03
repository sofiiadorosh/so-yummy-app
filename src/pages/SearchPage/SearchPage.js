import { MainPageTitle } from 'components/MainPageTitle';
import { Search } from 'components/Search';
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
          <Search />
        </Container>
      </CategoriesSection>
    </>
  );
};
