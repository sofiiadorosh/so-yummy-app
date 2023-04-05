import { MainPageTitle } from 'components/MainPageTitle';

import { Square } from 'components/Square';
import { Header } from '../../components/Header';
import { AddRecipeSection, Container, Title } from './AddRecipePage.styled';

export const AddRecipePage = () => {
  return  ( 
  <> <Header/>
  <AddRecipeSection>
<Container>
  <Square />  
  <Title>
  <MainPageTitle title="Add recipe" />
  </Title>
</Container>
</AddRecipeSection></>
);};
