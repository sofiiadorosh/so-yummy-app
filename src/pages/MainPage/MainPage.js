import { useNavigate } from 'react-router-dom';
import { MainContainer } from 'components/MainContainer';
import { toast } from 'react-toastify';

import { ChooseYourBreakfast } from '../../components/ChooseYourBreakfast';
import {SearchForm} from '../../components/SearchForm'
import { PreviewCategories } from 'components/PreviewCategories';
import { Header } from '../../components/Header';
import {
  MainPageBackground,
  MainPageContainer,
  Title,
  MainPageText,
  Span,
  ColorWrap,
} from './MainPage.styled';


 

export const MainPage = () => {

  const navigate = useNavigate();

  const handleOnSubmit = (query, type) => {
      if (query === '') {
      return toast.warning(
        `Wow, it looks like you didn't enter anything!!!`,
      );
      } else {
      navigate(`/search?query=${query}&type=${type}`);
  }

};

  return (
    <>
      <ColorWrap>
        <MainPageBackground>
          <MainContainer>
            <Header />
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
              <SearchForm styled={'black'} handleOnSubmit={handleOnSubmit}/>
            </MainPageContainer>
            
          </MainContainer>
        </MainPageBackground>
        <PreviewCategories />
      </ColorWrap>
      
    </>
  );
};
