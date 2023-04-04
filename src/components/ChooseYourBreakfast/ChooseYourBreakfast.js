import {
  ChooseBlock,
  ChooseLink,
  ChooseSpan,
  ChooseText,
  RightArrow,
} from './ChooseYourBreakfast.styled';

import { BsArrowRight } from 'react-icons/bs';

export const ChooseYourBreakfast = () => {
  return (
    <ChooseBlock>
      <ChooseText>
        <ChooseSpan>Delicious and healthy &nbsp;</ChooseSpan>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </ChooseText>
      <ChooseLink to="/categories">
        See recipes
        <BsArrowRight size={12} />
      </ChooseLink>
    </ChooseBlock>
  );
};
