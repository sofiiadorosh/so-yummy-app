import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TabBar = styled.div`
  display: flex;
  gap: 28px;

  margin-bottom: 32px;
  padding: 0 29px;

  border-bottom: 0.29px solid;
  border-color: ${props => props.theme.colors.line};

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    gap: 55px;
    margin-bottom: 50px;
    padding: 0 30px;

    border-width: 1px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }
`;

const TabItem = styled(NavLink)`
  position: relative;

  display: block;
  padding: 10px 0 32px;

  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1;

  color: ${props => props.theme.colors.secondaryLightText};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;

    background-color: transparent;
  }

  &.active {
    color: ${props => props.theme.colors.greenAccent};

    &::after {
      background-color: ${props => props.theme.colors.greenAccent};
    }
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${props => props.theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 28px;

    font-size: ${props => props.theme.fontSizes[5]}px;

    color: ${props => props.theme.colors.tertiaryLightText};
  }
`;

export { TabItem, TabBar };
