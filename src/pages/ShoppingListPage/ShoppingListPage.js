import { Outlet } from 'react-router-dom';
import { MainPageTitle } from 'components/MainPageTitle';

import { Square } from 'components/Square';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList';

import { ShoppingListSection, Container, Title } from './ShoppingListPage.styled';

export const ShoppingListPage = () => {
  return (
    <ShoppingListSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="Shopping list" />
        </Title>
        <IngredientsShoppingList />
        <Outlet />
      </Container>
    </ShoppingListSection>
  )
};
