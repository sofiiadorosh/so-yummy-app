import styled, { css } from 'styled-components';
import { ReactComponent as Instagram } from './images/Instagram.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 119px;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 134px;
  }
`;

const Link = styled.a`
  * {
    fill: ${props => props.theme.colors.greenAccent};
  }
  &:hover * {
    fill: ${props => props.theme.colors.whiteText};
  }
  ${({ type }) =>
    type === 'dark' &&
    css`
      * {
        fill: ${props => props.theme.colors.whiteText};
      }
      &:hover * {
        fill: ${props => props.theme.colors.normalDark};
      }
    `}
  ${({ type }) =>
    type === 'green' &&
    css`
      * {
        fill: ${props => props.theme.colors.whiteText};
      }
      &:hover * {
        fill: ${props => props.theme.colors.normalDark};
      }
    `}
`;

const InstagramIcon = styled(Instagram)`
  width: 17px;
  height: 17px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export { Wrapper, Link, InstagramIcon };
