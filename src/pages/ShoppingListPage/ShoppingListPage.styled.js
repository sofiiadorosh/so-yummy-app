import styled from 'styled-components';

const ShoppingListSection = styled.section`
  padding: 50px 0 100px;

  @media screen and (min-width: 768px) {
    padding: 72px 0 200px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 100px;
  }
`

export { ShoppingListSection, Container, Title };