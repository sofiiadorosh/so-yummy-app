import styled from 'styled-components';

const AppBar = styled.header`
  position: relative;

  padding-top: 18px;
`;

const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;

    width: 1440px;
    padding: 0 100px;
  }
`;

const MobileOpenHeader = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  margin-right: auto;
`;

const MobileUserLogoWrapper = styled.div`
  display: block;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 24px;
  padding: 0;

  background-color: transparent;

  border: none;
  outline: none;

  svg {
    fill: ${props => props.theme.colors.secondaryDarkBackground};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  transform: translateY(-100%);

  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 18px 16px;

  background-color: #ebf3d4;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 1440px) {
    padding: 18px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    position: static;

    width: auto;
    height: auto;
    margin-left: auto;
    padding: 0;

    background-color: transparent;

    transform: none;
  }

  ${({ status }) => {
    return status
      ? 'transform: translateY(0);'
      : 'transform: translateY(-100%);';
  }}
`;

const UserLogoWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-left: 226px;
  }
`;

const MobileThemeToggler = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const MobileCloseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const DesktopThemeToggler = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    margin-left: 50px;
  }
`;

const CrossButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;

  background-color: transparent;

  border: none;
  outline: none;

  svg {
    fill: ${props => props.theme.colors.secondaryDarkBackground};
  }
`;

export {
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
};
