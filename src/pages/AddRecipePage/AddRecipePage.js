
import { Square } from 'components/Square';
import { PopularRecipe } from 'components/PopularRecipe';
import { MainPageTitle } from 'components/MainPageTitle';
import {AddRecipeForm} from "../../components/AddRecipeForm/AddRecipeForm"
import{ AddRecipeSection,Container,Title,PageWrapper } from "./AddRecipePage.styled"
export const AddRecipePage = () => {
  return  (     <AddRecipeSection>
    <Container>
      <Square />
      <Title>
        <MainPageTitle title="Add recipe" />
      </Title>
      <PageWrapper>
      <AddRecipeForm/>
      <PopularRecipe />
      </PageWrapper>
    </Container>
  </AddRecipeSection>
);};
