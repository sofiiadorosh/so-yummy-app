import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLogo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: #8baa36;

  border-radius: 12px;

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  img {
    width: 28px;
    height: 28px;

    stroke: #fafafa;

    @media screen and (min-width: 768px) {
      width: 30px;
      height: 30px;
    }
  }
`;
