import { Outlet } from 'react-router-dom';
import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { MyRecipesList } from 'components/MyRecipesList';

import { MyRecipesPageSection, Container, Title} from './MyRecipesPage.styled';

export const MyRecipesPage = () => {
  return (
    <MyRecipesPageSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="My recipes" />
        </Title>
        <MyRecipesList />
        <Outlet />
      </Container>
    </MyRecipesPageSection>
  );
};
