import { useState, useEffect } from 'react';

import { getShoppingList, deleteFromShoppingList } from 'services/soyummyAPI';

import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList';

import {
  ShoppingListSection,
  Container,
  Title,
} from './ShoppingListPage.styled';

export const ShoppingListPage = () => {
  const [ingredients, setIngredients] = useState([]);

  const deleteHandler = id => {
    try {
      const remove = async () => {
        const data = await deleteFromShoppingList(id);
        return data;
      };
      remove();
      setIngredients(prevState => prevState.filter(elem => elem._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getIngredients = async () => {
      const data = await getShoppingList();
      setIngredients(data.ingredients);
    };
    getIngredients();
  }, []);

  return (
    <ShoppingListSection>
      <Container>
        <Square />
        <Title>
          <MainPageTitle title="Shopping list" />
        </Title>
        <IngredientsShoppingList
          ingredients={ingredients}
          deleteIngredient={deleteHandler}
        />
      </Container>
    </ShoppingListSection>
  );
};
