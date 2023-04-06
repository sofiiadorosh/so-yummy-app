import { BsArrowRight } from 'react-icons/bs';

import {
  ChooseBlock,
  ChooseDescr,
  ChooseAccent,
  StyledLink,
} from './ChooseYourBreakfast.styled';

export const ChooseYourBreakfast = () => {
  return (
    <ChooseBlock>
      <ChooseDescr>
        <ChooseAccent>Delicious and healthy </ChooseAccent>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </ChooseDescr>
      <StyledLink to="/categories/breakfast">
        <span>See recipes</span>
        <BsArrowRight size={18} />
      </StyledLink>
    </ChooseBlock>
  );
};
