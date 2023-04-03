import { MainContainer } from 'components/MainContainer';
import {
  MainPageBg,
  MainPageDiv,
  MainPageH1,
  MainPageText,
  SpanGr,
  ColorWrap,
} from './MainPage.styled';
import { ChooseYourBreakfast } from '../../components/ChooseYourBreakfast';
import {SearchForm} from '../../components/SearchForm'

export const MainPage = () => {
  return (
    <>
      <ColorWrap>
        <MainPageBg>
          <MainContainer>
            <MainPageDiv>
              <MainPageH1>
                <SpanGr>So</SpanGr>Yummy
              </MainPageH1>
              <MainPageText>
                "What to cook?" is not only a recipe app, it is, in fact, your
                cookbook. You can add your own recipes to save them for the
                future.
              </MainPageText>
              <ChooseYourBreakfast />
              <SearchForm styled={'black'}  />
            </MainPageDiv>
          </MainContainer>
        </MainPageBg>
      </ColorWrap>
    </>
  );
};
