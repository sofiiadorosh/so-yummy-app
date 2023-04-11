import { GrClose } from 'react-icons/gr';

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

export const IngredientsShoppingList = ({ ingredients, deleteIngredient }) => {
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
        {ingredients.length > 0 &&
          ingredients.map(({ _id, ingredient: { ttl, thb }, measure }) => (
            <IngredientsItem key={_id}>
              <ItemTitleWrapper>
                <div>
                  <img src={thb ? thb : defaultIngredientsImg} alt={ttl} />
                </div>
                <IngredientsTitle children={ttl} />
              </ItemTitleWrapper>
              <MeasureWrapper>
                <p children={measure} />
                <button type="button" onClick={() => deleteIngredient(_id)}>
                  <GrClose />
                </button>
              </MeasureWrapper>
            </IngredientsItem>
          ))}
      </IngredientsList>
    </>
  );
};
