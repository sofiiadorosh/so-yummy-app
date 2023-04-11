import styled from 'styled-components';

export const TrashButtonStyled = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  outline: none;
  padding: 5px;

  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
    padding: 8px;
  }

  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
    padding: 10px;
  }
`;

// export const TrashIcon = styled.img`
//   width: 14px;
//   height: 14px;
//   display: block;
//   margin: 0 auto;

//   @media screen and (min-width: 768px) {
//     width: 22px;
//     height: 22px;
//   }

//   @media screen and (min-width: 1440px) {
//     width: 24px;
//     height: 24px;
//   }
// `;
