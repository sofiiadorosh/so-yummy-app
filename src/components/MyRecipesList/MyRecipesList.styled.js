import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 14px 9px;

  background-color: #FFFFFF;
  border-radius:8px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    padding: 28px 24px;
  }
  @media screen and (min-width: 1440px) {
    gap: 50px;
    padding: 40px 40px;
  }
`

export {List}