import { MainContainer } from 'components/MainContainer';
import {
  MainPageBackground,
  MainPageContainer,
  Title,
  MainPageText,
  Span,
  ColorWrap,
} from './MainPage.styled';
import { ChooseYourBreakfast } from '../../components/ChooseYourBreakfast';
import {SearchForm} from '../../components/SearchForm'

export const MainPage = () => {
  return (
    <>
      <ColorWrap>
        <MainPageBackground>
          <MainContainer>
            <MainPageContainer>
              <Title>
                <Span>So</Span>Yummy
              </Title>
              <MainPageText>
                "What to cook?" is not only a recipe app, it is, in fact, your
                cookbook. You can add your own recipes to save them for the
                future.
              </MainPageText>
              <ChooseYourBreakfast />
              <SearchForm styled={'black'}  />
            </MainPageContainer>
          </MainContainer>
        </MainPageBackground>
      </ColorWrap>
    </>
  );
};
