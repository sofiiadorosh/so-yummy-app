import { WelcomePageContainer, WelcomePageTitle, WelcomeText, ButtonContainer, RedirectButton} from './WelcomePage.styled';

export const WelcomePage = () => {
   return (
     <WelcomePageContainer>
       <WelcomePageTitle> Welcome to the app! </WelcomePageTitle>
       <WelcomeText>
         This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook.
         You can easily save and retrieve your own recipes at any time.
       </WelcomeText>
       <ButtonContainer>
         <RedirectButton to="/register"> Registration </RedirectButton>
         <RedirectButton to="/signin"> Sign in </RedirectButton>
       </ButtonContainer>
     </WelcomePageContainer>
  );
};
