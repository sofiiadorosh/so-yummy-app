import { Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { getShoppingList } from 'services/soyummyAPI';

import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { Loader } from 'components/Loader';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList';

import { ShoppingListSection, Container, Title } from './ShoppingListPage.styled';

export const ShoppingListPage = () => {

  // const [list, setList] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  //   useEffect(() => {
  //   setIsLoading(true);
  //   const getData = async () => {
  //     try {
  //       const data = await getShoppingList();
  //       setList(data.list);
  //       setIsLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
  //   getData();
  // }, []);

  // if (!list) {
  //   return;
  // }



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
