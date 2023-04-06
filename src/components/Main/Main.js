import { MainTitle } from 'components/MainTitle';
import { SearchForm } from 'components/SearchForm';
import { ChooseYourBreakfast } from 'components/ChooseYourBreakfast';

import meal from '../../images/meal.png';
import arrow from '../../images/arrow.png';

import {
  MainSection,
  Container,
  MainTitleWrapper,
  SearchFormWrapper,
  MealPicture,
  Meal,
  Arrow,
  ProductWrapper,
} from './Main.styled';

export const Main = () => {
  return (
    <MainSection>
      <Container>
        <MainTitleWrapper>
          <MainTitle />
          <p>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </p>
          <SearchFormWrapper>
            <SearchForm />
          </SearchFormWrapper>
        </MainTitleWrapper>
        <MealPicture>
          <Meal src={meal} alt="Meal" />
          <ProductWrapper>
            <ChooseYourBreakfast />
            <Arrow src={arrow} alt="Arrow" />
          </ProductWrapper>
        </MealPicture>
      </Container>
    </MainSection>
  );
};
