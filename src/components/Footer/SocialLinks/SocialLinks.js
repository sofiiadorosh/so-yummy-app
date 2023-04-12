import React from 'react';
import sprite from 'images/Footer/sprite.svg';

import { Wrapper, Link } from './SocialLinks.styled';

const SocialLinks = () => {
  return (
    <Wrapper>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width={20} height={20}>
          <use href={sprite + '#icon-facebook'}></use>
        </svg>
      </Link>
      <Link
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width={20} height={20}>
          <use href={sprite + '#icon-youtube'}></use>
        </svg>
      </Link>
      <Link
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width={20} height={20}>
          <use href={sprite + '#icon-twitter'}></use>
        </svg>
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width={20} height={20}>
          <use href={sprite + '#icon-instagram'}></use>
        </svg>
      </Link>
    </Wrapper>
  );
};

export { SocialLinks };
