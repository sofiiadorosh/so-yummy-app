import styled from 'styled-components';

export const PaginationWrp = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
  }
`;

export const NoRecipesText = styled.div`
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
