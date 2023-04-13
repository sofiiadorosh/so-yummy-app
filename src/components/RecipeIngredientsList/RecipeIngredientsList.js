import { AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';

import { addToShoppingList } from 'services/soyummyAPI';

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

  const addIngredientHandler = ({ ingredient, measure }) => {
    setChecked(prevState =>
      prevState.map(elem =>
        elem.id === ingredient ? { ...elem, checked: !elem.checked } : elem
      )
    );

    const checkbox = checked.find(elem => elem.id === ingredient);

    if (!checkbox.checked) {
      const add = async () => {
        const data = await addToShoppingList({ ingredient, measure });
        return data;
      };
      add();
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
                        <AiOutlineCheck />
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
