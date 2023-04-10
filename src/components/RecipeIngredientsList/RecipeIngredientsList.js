import { GrFormCheckmark } from 'react-icons/gr';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToShoppingList,
  deleteFromShoppingList,
} from 'redux/shoppingList.js/operations';
import { selectShoppingList } from 'redux/shoppingList.js/selectors';

import {
  SectionIngredients,
  Container,
  TitleWrapper,
  Title,
  TitleAddWrap,
  IngredientsList,
  IngredientsItem,
  ItemTitleWrapper,
  IngredientsTitle,
  MeasureWrapper,
} from './RecipeIngredientsList.styled';

import defaultIngredientsImg from '../../images/noPhoto.svg';

const getInitialState = items => {
  return items
    .map(({ id }) => id._id)
    .map(elem => {
      return { id: elem, checked: false };
    });
};

export const RecipeIngredientsList = ({ ingredients }) => {
  const [checked, setChecked] = useState(getInitialState(ingredients));
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  const addIngredientHandler = ({ ingredient, measure }) => {
    setChecked(prevState =>
      prevState.map(elem =>
        elem.id === ingredient ? { ...elem, checked: !elem.checked } : elem
      )
    );

    const oldIngredient = shoppingList.find(
      item => item.ingredient === ingredient
    );
    console.log(oldIngredient);

    const checkbox = checked.find(elem => elem.id === ingredient);
    console.log(checkbox.checked);

    if (!checkbox.checked) {
      dispatch(addToShoppingList({ ingredient, measure }));
    } else {
      dispatch(deleteFromShoppingList(oldIngredient?._id));
    }
  };

  return (
    <SectionIngredients>
      <Container>
        <TitleWrapper>
          <Title children="Ingredients" />
          <TitleAddWrap>
            <Title children="Number" />
            <Title children="Add to list" />
          </TitleAddWrap>
        </TitleWrapper>
        <IngredientsList>
          {ingredients &&
            ingredients.map(({ id: { _id, ttl, thb }, measure }) => {
              return (
                <IngredientsItem key={_id} data-id={_id}>
                  <ItemTitleWrapper>
                    <div>
                      <img
                        src={thb ? thb : defaultIngredientsImg}
                        alt="Ingredient"
                      />
                    </div>
                    <IngredientsTitle children={ttl} />
                  </ItemTitleWrapper>
                  <MeasureWrapper>
                    <p children={measure} />
                    <label htmlFor={_id}>
                      <input
                        type="checkbox"
                        id={_id}
                        checked={checked[_id]}
                        onChange={() =>
                          addIngredientHandler({
                            ingredient: _id,
                            measure: measure,
                          })
                        }
                      />
                      <span>
                        <GrFormCheckmark />
                      </span>
                    </label>
                  </MeasureWrapper>
                </IngredientsItem>
              );
            })}
        </IngredientsList>
      </Container>
    </SectionIngredients>
  );
};
