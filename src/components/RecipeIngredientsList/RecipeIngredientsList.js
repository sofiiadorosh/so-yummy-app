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

export const RecipeIngredientsList = ({ ingredients }) => {
  const [checked, setChecked] = useState(false);
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  const changeIngredientsNumber = (ondNumber, newNumber) => {
    const number = newNumber.replace(new RegExp(/[0-9]+/g), '');
    const newMeasure = parseFloat(ondNumber) + parseFloat(newNumber) + number;
    return newMeasure;
  };

  const addIngredientHandler = ({ ingredient, measure }) => {
    setChecked(prevState => !prevState);

    const oldIngredient = shoppingList.find(
      item => item.ingredient._id === ingredient
    );

    if (checked && !oldIngredient) {
      return dispatch(addToShoppingList({ ingredient, measure }));
    } else if (checked && oldIngredient) {
      const newNumber = changeIngredientsNumber(oldIngredient.measure, measure);
      return dispatch(addToShoppingList({ ingredient, measure: newNumber }));
    } else if (!checked && oldIngredient) {
      if (parseFloat(oldIngredient.measure) > parseFloat(measure)) {
        const newNumber = changeIngredientsNumber(
          oldIngredient.measure,
          measure
        );
        return dispatch(addToShoppingList({ ingredient, measure: newNumber }));
      }
      dispatch(deleteFromShoppingList(oldIngredient._id));
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
                        checked={checked}
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
