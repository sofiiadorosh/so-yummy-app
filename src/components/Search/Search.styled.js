import styled from 'styled-components';

import bgrImage from '../../images/searchPageImg.png';

export const NoRecipesImg = styled.div`
  width: 208px;
  height: 133px;
  margin: auto;

  background-image: url(${bgrImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 33px;

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 225px;
  }
`;

export const NoRecipesText = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--secondaryTextColor);
  }
`;

export const PaginationWrp = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }
`;
