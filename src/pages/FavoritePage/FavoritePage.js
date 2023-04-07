import { Favorite } from 'components/Favorite/Favorite';
import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';

import { CategoriesSection, Container, Title } from './FavoritePage.styled';

export const FavoritePage = () => {
  return (
    <>
      <CategoriesSection>
        <Container>
          <Square />
          <Title>
            <MainPageTitle title="Favorites" />
          </Title>
          <Favorite />
        </Container>
      </CategoriesSection>
    </>
  );
};
