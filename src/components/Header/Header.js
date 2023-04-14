import { useState, useEffect } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTheme } from '../../redux/theme/themeSlice';

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

  const { darkTheme } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const bodyEl = document.getElementById('body');

    bodyEl.style.overflow = toggleMenu ? 'hidden' : 'visible';
  }, [toggleMenu]);

  const toggleMenuHandler = () => {
    return setToggleMenu(prevState => !prevState);
  };

  const themeToggleHandler = () => {
    dispatch(toggleTheme());
  };

  const mobileMenuHandler = e => {
    if (e.target.closest('li') && window.innerWidth < 1439) {
      return setToggleMenu(prevState => !prevState);
    }
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
        <MobileMenu status={toggleMenu} onClick={mobileMenuHandler}>
          <MobileCloseHeader>
            <Logo />
            <CrossButton type="button" onClick={toggleMenuHandler}>
              <IoClose size={32} />
            </CrossButton>
          </MobileCloseHeader>
          <Navigation />
          <MobileThemeToggler>
            <ThemeToggler status={darkTheme} onClick={themeToggleHandler} />
          </MobileThemeToggler>
        </MobileMenu>
        <UserLogoWrapper>
          <UserLogo />
        </UserLogoWrapper>
        <DesktopThemeToggler>
          <ThemeToggler status={darkTheme} onClick={themeToggleHandler} />
        </DesktopThemeToggler>
      </Container>
    </AppBar>
  );
};
