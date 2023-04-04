import styled from 'styled-components';

export const Recipes = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 14px;
    row-gap: 100px;
  }
`;
