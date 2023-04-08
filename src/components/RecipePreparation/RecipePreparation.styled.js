import styled from 'styled-components';

const RecipePreparationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 100px;
  
  @media screen and (min-width: 768px) {
    padding: 96px 0 200px;
   
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 100px 0 200px;
    
  }
  h2 {
    margin-bottom: 28px;
    font-weight: ${props => props.theme.fontWeights.semibold};
    font-size: ${props => props.theme.fontSizes[7]}px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: ${props => props.theme.colors.primaryDarkText};
    @media screen and (min-width: 768px) {
      margin-bottom: 32px;
    }
  }
`;

const RecipePreparationBlock = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 757px;
    margin-right: 50px;
  }
`;

const CookingRecipe = styled.div`
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
const RecipeImageWrapper = styled.div`
  
  border-radius: 8px;
  width: 343px;
  height: 250px;
  @media screen and (min-width: 768px) {
    
    width: 433px;
    height: 332px;
  }
  @media screen and (min-width: 1440px) {
    width: 433px;
    height: 332px;
  }
`;

const CookingSteps = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: step;
`;

const CookingStep = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 14px;
    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }
  &::before {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    counter-increment: step;
    content: counter(step);
    margin-right: 14px;
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.5;
    font-weight: ${props => props.theme.fontWeights.semibold};
    color: ${props => props.theme.colors.whiteText};
    background: ${props => props.theme.colors.darkAccent};
    width: 21px;
    height: 21px;
    border-radius: 50%;
  }
  p {
    flex: 1;
    font-size: ${props => props.theme.fontSizes[2]}px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.8);
    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes[3]}px;
      line-height: 1.29;
    }
  }
`;
export { RecipePreparationWrapper, RecipePreparationBlock, CookingRecipe, RecipeImageWrapper, CookingSteps, CookingStep };