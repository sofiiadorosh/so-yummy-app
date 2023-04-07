import { GrFormCheckmark } from 'react-icons/gr';

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
                <IngredientsItem key={_id}>
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
                      <input type="checkbox" id={_id} />
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
