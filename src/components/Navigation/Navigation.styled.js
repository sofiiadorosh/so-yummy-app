import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const NavItem = styled.li`
  &:last-child {
    span {
      @media screen and (min-width: 1440px) {
        display: none;
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes[5]}px;
    line-height: 1;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.quaternaryDarkText};

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes[7]}px;
    }

    @media screen and (min-width: 1440px) {
      font-size: ${props => props.theme.fontSizes[3]}px;
      line-height: 1.6;
    }
  }

  svg {
    fill: ${props => props.theme.colors.quaternaryDarkText};

    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    span {
      font-weight: ${props => props.theme.fontWeights.semibold};

      color: ${props => props.theme.colors.greenAccent};
    }
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    span {
      color: ${props => props.theme.colors.greenAccent};
    }

    svg {
      fill: ${props => props.theme.colors.greenAccent};
    }
  }
`;

export { NavList, NavItem, StyledLink };
