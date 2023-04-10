import { GrClose } from 'react-icons/gr';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteFromShoppingList,
  getShoppingList,
} from 'redux/shoppingList.js/operations';
import { selectShoppingList } from 'redux/shoppingList.js/selectors';

import defaultIngredientsImg from '../../images/noPhoto.svg';

import {
  TitleWrapper,
  Title,
  TitleRemoveWrap,
  IngredientsList,
  IngredientsItem,
  ItemTitleWrapper,
  IngredientsTitle,
  MeasureWrapper,
} from './IngredientsShoppingList.styled';

export const IngredientsShoppingList = () => {
  const ingredients = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList());
  }, [dispatch]);

  return (
    <>
      <TitleWrapper>
        <Title children="Product" />
        <TitleRemoveWrap>
          <Title children="Number" />
          <Title children="Remove" />
        </TitleRemoveWrap>
      </TitleWrapper>
      <IngredientsList>
        {ingredients.map(({ ingredient: { ttl, thb }, measure, _id }) => (
          <IngredientsItem key={_id}>
            <ItemTitleWrapper>
              <div>
                <img src={thb ? thb : defaultIngredientsImg} alt={ttl} />
              </div>
              <IngredientsTitle children={ttl} />
            </ItemTitleWrapper>
            <MeasureWrapper>
              <p children={measure} />
              <button
                type="button"
                onClick={() => dispatch(deleteFromShoppingList(_id))}
              >
                <GrClose />
              </button>
            </MeasureWrapper>
          </IngredientsItem>
        ))}
      </IngredientsList>
    </>
  );
};
