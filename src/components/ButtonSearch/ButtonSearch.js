import { ButtonSearchStyle } from './ButtonSearch.styled';

export const ButtonSearch = ({ type, fn, styled, text, location }) => {
  const onClick = e => {
    if (!fn) return;
    fn(e);
  };
  return (
    <ButtonSearchStyle
      type={type}
      onClick={onClick}
      styled={styled}
      location={location}
    >
      {text}
    </ButtonSearchStyle>
  );
};