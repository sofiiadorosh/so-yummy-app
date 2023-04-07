import {
  SectionIngredients,
  TitleWrap,
  Title,
  TitleTextWrap,
  TitleText,
  IngredientsList,
  IngredientsItem,
  Wrap,
  IngredientImg,
  IngredientsTitle,
  IngredientsMeasure,
  IngredientsCheck,
  Span,
  Label,
  Icon,
  Container,
} from "./RecipeIngredientsList.styled";

import DefaultIngredientsImg from "../../images/noPhoto.svg";

export const RecipeIngredientsList = ({ ingredients }) => {
  return (
    <SectionIngredients>
      <Container>
        <TitleWrap>
          <Title children="Ingredients" />
          <TitleTextWrap>
            <TitleText>Number</TitleText>
            <TitleText>Add to list</TitleText>
          </TitleTextWrap>
        </TitleWrap>
        <IngredientsList>
          {ingredients &&
            ingredients.map(({ image, _id, measure, name }) => {
              return (
                <IngredientsItem key={_id}>
                  <Wrap>
                    {
                      <IngredientImg
                        src={image ? image : DefaultIngredientsImg}
                        alt="Ingredient"
                      />
                    }
                    <IngredientsTitle>{name}</IngredientsTitle>
                  </Wrap>
                  <Wrap>
                    <IngredientsMeasure>{measure}</IngredientsMeasure>
                    <Label htmlFor={name}>
                      <IngredientsCheck type="checkbox" id={name} />
                      <Span>
                        <Icon />
                      </Span>
                    </Label>
                  </Wrap>
                </IngredientsItem>
              );
            })}
        </IngredientsList>
      </Container>
    </SectionIngredients>
  );
};