import styled from 'styled-components';

const AddRecipeSection = styled.section`
  padding: 114px 0 100px;

  @media screen and (min-width: 768px) {
    padding: 136px 0 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 164px;
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
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media screen and (min-width: 768px) {
    gap: 100px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 121px;
  }
`;

export { AddRecipeSection, Container, Title, PageWrapper };
