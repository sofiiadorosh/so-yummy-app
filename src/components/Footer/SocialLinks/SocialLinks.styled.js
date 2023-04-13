import styled from 'styled-components';

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
  svg {
    fill: ${props => props.theme.colors.socialLinks};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover,
    :focus {
      fill: ${props => props.theme.colors.socialLinksHover};
    }
  }
`;

export { Wrapper, Link };
