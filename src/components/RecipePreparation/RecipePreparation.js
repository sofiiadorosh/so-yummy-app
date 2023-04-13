import { useState, useEffect } from 'react';

import defaultIngredientsImg from '../../images/noPhoto.svg';

import {
  PreparationSection,
  Container,
  CookingDescr,
  CookingSteps,
  ListIdx,
  StepDescr,
  CookingPicture,
} from './RecipePreparation.styled';

export const RecipePreparation = ({
  item: { title, instructions, thumb, imageURL },
}) => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (instructions) {
      if (instructions.includes('\r\n\r\n')) {
        return setSteps(instructions.split('\r\n\r\n'));
      }
      return setSteps(instructions.split('\r\n'));
    }
  }, [instructions]);

  return (
    <PreparationSection>
      <Container>
        <CookingDescr>
          <h2>Recipe Preparation</h2>
          <CookingSteps>
            {steps.map((step, index) => (
              <li key={index}>
                <ListIdx>
                  <span>{index + 1}</span>
                </ListIdx>
                <StepDescr>{step}</StepDescr>
              </li>
            ))}
          </CookingSteps>
        </CookingDescr>
        <CookingPicture>
          <img
            src={thumb ? thumb : imageURL ? imageURL : defaultIngredientsImg}
            alt={title}
          />
        </CookingPicture>
      </Container>
    </PreparationSection>
  );
};
