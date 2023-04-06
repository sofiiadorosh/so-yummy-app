import React from 'react';
import { ReactComponent as SvgLogo } from 'images/Footer/logoFooter.svg';
import { ReactComponent as SvgLogoInv } from 'images/Footer/logoInv.svg';
const Logo = ({ inv, width, height }) => {
  if (inv) {
    return <SvgLogoInv style={{ width: width, height: height }} />;
  }
  return <SvgLogo style={{ width: width, height: height }} />;
};

export default Logo;
