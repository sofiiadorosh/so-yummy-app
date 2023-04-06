/* Компонент приймає пропс light, dark або green, 
в залежності від того, на якому фоні рендериться компонент*/
import { css } from 'styled-components';
import React from 'react';
import { Wrapper, Link, InstagramIcon } from './SocialLinks.styled';
import clsx from 'clsx';

import { ReactComponent as Facebook } from './images/Facebook.svg';
import { ReactComponent as Youtube } from './images/Youtube.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';

const SocialLinks = ({ type }) => {
  return (
    <Wrapper>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook width="20" height="20" />
      </Link>
      <Link
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube width="20" height="15" />
      </Link>
      <Link
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter width="20" height="16" />
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon className={clsx(css.instagramm)} />
      </Link>
    </Wrapper>
  );
};

export default SocialLinks;
