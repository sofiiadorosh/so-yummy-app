import styled from 'styled-components';

const MyRecipesPageSection = styled.section`
  padding: 114px 0 191px;

  @media screen and (min-width: 768px) {
    padding: 136px 0 305px;
  }

  @media screen and (min-width: 1440px) {
    padding: 164px 0 205px;;
  }
`

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
    margin-bottom: 72px;
  }
`;
 const NoRecipesText = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 101px;
  margin-top: 101px;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 200px;
    color: var(--secondaryTextColor);
  }
`;

export { MyRecipesPageSection,Container,Title, NoRecipesText };