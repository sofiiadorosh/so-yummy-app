import logo from '../../images/logo.png';

import { StyledLogo } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLogo to="/main">
      <img src={logo} alt="logo" />
    </StyledLogo>
  );
};
