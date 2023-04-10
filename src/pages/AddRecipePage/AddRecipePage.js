
import { Square } from 'components/Square';
import { MainPageTitle } from 'components/MainPageTitle';
import { PopularRecipe } from 'components/PopularRecipe';
import {AddRecipeForm} from "../../components/AddRecipeForm/AddRecipeForm"
import{ AddRecipeSection,Container,Title } from "./AddRecipePage.styled"
export const AddRecipePage = () => {
  return  (     <AddRecipeSection>
    <Container>
      <Square />
      <Title>
        <MainPageTitle title="Add recipe" />
        <PopularRecipe/>
      </Title>
      <AddRecipeForm/>
      
    </Container>
  </AddRecipeSection>
  
);};
