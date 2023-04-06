
import { Square } from 'components/Square';
import { MainPageTitle } from 'components/MainPageTitle';
import {AddRecipeForm} from "../../components/AddRecipeForm/AddRecipeForm"
import{ AddRecipeSection,Container,Title } from "./AddRecipePage.styled"
export const AddRecipePage = () => {
  return  (     <AddRecipeSection>
    <Container>
      <Square />
      <Title>
        <MainPageTitle title="Add recipe" />
      </Title>
      <AddRecipeForm/>
    </Container>
  </AddRecipeSection>
);};
