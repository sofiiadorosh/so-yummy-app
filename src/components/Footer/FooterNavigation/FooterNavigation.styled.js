import styled from 'styled-components';

const FooterNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  color: ${props => props.theme.colors.primaryLightText};

  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding-top: 50px;
    width: 768px;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    flex-wrap: no-wrap;
    align-items: start;
    width: 100%;
  }
`;

export { FooterNavigationContainer };
