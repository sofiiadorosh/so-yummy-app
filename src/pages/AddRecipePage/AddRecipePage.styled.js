import styled from 'styled-components';

const CategoriesSection = styled.section`
  padding: 50px 0 100px;

  @media screen and (min-width: 768px) {
    padding: 72px 0 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 100px;
  }
`;

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

const Title = styled.div`
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
`;

export { CategoriesSection, Container, Title };
