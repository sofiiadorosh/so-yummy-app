import { Outlet } from 'react-router-dom';
import { MainPageTitle, Container, Title } from 'components/MainPageTitle';

import { Square } from 'components/Square';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList';

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
