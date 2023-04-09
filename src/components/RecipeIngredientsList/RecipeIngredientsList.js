import { GrFormCheckmark } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { addToShoppingList } from 'redux/shoppingList.js/operations';
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
  const shoppingList = useSelector(selectShoppingList);
  const dispatch = useDispatch();

  const addIngredientHandler = ({ ingredient, measure }) => {
    const oldIngredient = shoppingList.find(item => item.id._id === ingredient);

    if (!oldIngredient) {
      return dispatch(addToShoppingList({ ingredient, measure }));
    } else if (oldIngredient) {
      const number = measure.replace(new RegExp(/[0-9]+/g), '');
      const newMeasure =
        parseInt(oldIngredient.measure) + parseInt(measure) + number;
      return dispatch(addToShoppingList({ ingredient, measure: newMeasure }));
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
