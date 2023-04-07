import styled from 'styled-components';

const ButtonSearchStyle = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 113px;
  height: 52px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: 1.5;

  color: ${props => props.theme.colors.primaryLightText};
  background-color: ${props => props.theme.colors.darkAccent};

  border-radius: 24px 44px;
  border: none;
  outline: none;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 59px;

    font-size: ${props => props.theme.fontSizes[4]}px;
  }

  @media screen and (min-width: 1440px) {
    height: 70px;
  }
`;
export { ButtonSearchStyle };
