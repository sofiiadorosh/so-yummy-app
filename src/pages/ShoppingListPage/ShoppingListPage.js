import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getShoppingList, deleteFromShoppingList } from 'services/soyummyAPI';
import { getCurrentUser } from 'redux/auth/operations';

import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import { IngredientsShoppingList } from 'components/IngredientsShoppingList/IngredientsShoppingList';

import {
  ShoppingListSection,
  Container,
  Title,
} from './ShoppingListPage.styled';

export const ShoppingListPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();

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
    dispatch(getCurrentUser()); 
    const getIngredients = async () => {
      const data = await getShoppingList();
      setIngredients(data.ingredients);
    };
    getIngredients();
  }, [dispatch]);

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
