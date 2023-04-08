import React from 'react';

import TextFooter from './TextFooter/TextFooter';
import { Nav } from './Nav/Nav';

import { FooterNavigationContainer } from './FooterNavigation.styled';

const FooterNavigation = () => {
  return (
    <FooterNavigationContainer>
      <TextFooter />
      <Nav />
    </FooterNavigationContainer>
  );
};

export { FooterNavigation };
