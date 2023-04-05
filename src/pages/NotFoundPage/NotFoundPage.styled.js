import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

const NotFoundSection = styled.section`
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding-bottom: 204px;
  }

  @media screen and (min-width: 1440px) {
    padding: 138px 0 203px;
  }
`;

const ErrorImage = styled.div`
  width: 259px;

  margin: 0 auto;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 498px;

    margin-bottom: 32px;
  }
`;

const ErrorMessage = styled.p`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 209px;
  margin: 0 auto;

  letter-spacing: -0.02em;
  text-align: center;

  color: ${props => props.theme.colors.blackText};

  @media screen and (min-width: 768px) {
    gap: 14px;

    width: auto;
  }
`;

const SorryLine = styled.span`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[5]}px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[7]}px;
    line-height: 1;
  }
`;

const NotFoundLine = styled.span`
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.29;

  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: 1.33;
  }
`;

export {
  NotFoundSection,
  Container,
  ErrorImage,
  ErrorMessage,
  SorryLine,
  NotFoundLine,
};
