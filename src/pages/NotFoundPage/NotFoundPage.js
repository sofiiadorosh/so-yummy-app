import errorPicture from '../../images/error.png';
import { Square } from 'components/Square';

import {
  NotFoundSection,
  Container,
  ErrorImage,
  ErrorMessage,
  SorryLine,
  NotFoundLine,
} from './NotFoundPage.styled';

export const NotFoundPage = () => {
  return (
    <NotFoundSection>
      <Container>
        <Square />
        <ErrorImage>
          <img
            src={errorPicture}
            alt="404 error page not found with people connecting a plug"
          />
        </ErrorImage>
        <ErrorMessage>
          <SorryLine>We are sorry,</SorryLine>
          <NotFoundLine>
            but the page you were looking for can’t be found...
          </NotFoundLine>
        </ErrorMessage>
      </Container>
    </NotFoundSection>
  );
};
