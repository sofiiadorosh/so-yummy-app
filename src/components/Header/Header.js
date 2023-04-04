import { useState, useEffect } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';

import { Logo } from 'components/Logo';
import { Navigation } from 'components/Navigation';
import { UserLogo } from 'components/UserLogo';
import { ThemeToggler } from 'components/ThemeToggler';

import {
  AppBar,
  Container,
  MobileOpenHeader,
  LogoWrapper,
  MobileUserLogoWrapper,
  BurgerButton,
  MobileMenu,
  UserLogoWrapper,
  MobileThemeToggler,
  MobileCloseHeader,
  DesktopThemeToggler,
  CrossButton,
} from './Header.styled';

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [themeToggler, setThemeToggler] = useState(false);

  useEffect(() => {
    const bodyEl = document.getElementById('body');

    bodyEl.style.overflow = toggleMenu ? 'hidden' : 'visible';
  }, [toggleMenu]);

  const toggleMenuHandler = () => {
    return setToggleMenu(prevState => !prevState);
  };

  const themeToggleHandler = () => {
    return setThemeToggler(prevState => !prevState);
  };

  return (
    <AppBar>
      <Container>
        <MobileOpenHeader>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <MobileUserLogoWrapper>
            <UserLogo />
          </MobileUserLogoWrapper>
          <BurgerButton type="button" onClick={toggleMenuHandler}>
            <HiMenuAlt2 size={28} />
          </BurgerButton>
        </MobileOpenHeader>
        <MobileMenu status={toggleMenu}>
          <MobileCloseHeader>
            <Logo />
            <CrossButton type="button" onClick={toggleMenuHandler}>
              <RxCross2 size={32} />
            </CrossButton>
          </MobileCloseHeader>
          <Navigation />
          <MobileThemeToggler>
            <ThemeToggler status={themeToggler} onClick={themeToggleHandler} />
          </MobileThemeToggler>
        </MobileMenu>
        <UserLogoWrapper>
          <UserLogo />
        </UserLogoWrapper>
        <DesktopThemeToggler>
          <ThemeToggler status={themeToggler} onClick={themeToggleHandler} />
        </DesktopThemeToggler>
      </Container>
    </AppBar>
  );
};
