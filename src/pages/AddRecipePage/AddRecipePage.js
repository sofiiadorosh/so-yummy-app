
import { MainPageTitle } from 'components/MainPageTitle';
import { Square } from 'components/Square';
import {AddRecipeForm} from "../../components/AddRecipeForm/AddRecipeForm"

import { AddRecipeSection, Container, Title } from './AddRecipePage.styled';

export const AddRecipePage = () => {
  return  ( 
  <> 
  <AddRecipeSection>
<Container>
  <Square />  
  <Title>
  <MainPageTitle title="Add recipe" />
  <AddRecipeForm/>
  </Title>
</Container>
</AddRecipeSection></>
);};
