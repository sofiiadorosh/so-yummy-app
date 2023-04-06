import React from 'react';
import TextFooter from './TextFooter/TextFooter';
import { FooterNavigationContainer } from './FooterNavigation.styled';

const FooterNavigation = () => {
  return (
    <FooterNavigationContainer>
      <TextFooter />
    </FooterNavigationContainer>
  );
};

export default FooterNavigation;
