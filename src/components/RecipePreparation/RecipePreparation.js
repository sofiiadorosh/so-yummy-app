import DefaultIngredientsImg from "../../images/noPhoto.svg";

import {
  RecipePreparationWrapper,
  CookingRecipe,
  RecipeImageWrapper,
  RecipePreparationBlock,
  CookingSteps,
  CookingStep,
} from './RecipePreparation.styled';

export const RecipePreparation = ({ description, photo }) => {
  let cookingSteps = [];
  if (description) {
    if (!description.includes('\r\n')) {
      return;
    } else {
      cookingSteps = description.split('\n');
    }
  }

  return (
    <RecipePreparationWrapper>
      <RecipePreparationBlock>
        <h2>RecipePreparation</h2>
        <CookingRecipe>
          {cookingSteps.length > 0 ? (
            <CookingSteps>
              {cookingSteps.length > 0 &&
                cookingSteps.map((step, idx) => (
                  <CookingStep key={idx}>
                    <p>{idx + 1}</p>
                  </CookingStep>
                ))}
            </CookingSteps>
          ) : (
            description
          )}
        </CookingRecipe>
      </RecipePreparationBlock>
      <RecipeImageWrapper img={photo? photo : DefaultIngredientsImg}></RecipeImageWrapper>
    </RecipePreparationWrapper>
  );
};