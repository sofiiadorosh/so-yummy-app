import React from 'react';

import TextFooter from './TextFooter/TextFooter';
import { Nav } from './Nav/Nav';
import { SubscribeForm } from './SubscribeForm/SubscribeForm';
import { FooterNavigationContainer } from './FooterNavigation.styled';

const FooterNavigation = () => {
  return (
    <FooterNavigationContainer>
      <TextFooter />
      <Nav />
      <SubscribeForm />
    </FooterNavigationContainer>
  );
};

export { FooterNavigation };
