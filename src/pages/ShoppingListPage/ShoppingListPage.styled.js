import styled from 'styled-components';
import leavesDesktop from '../../images/section-leaves-desktop.png';
import leavesTablet from '../../images/section-leaves-tablet.png';
import leavesMobile from '../../images/section-leaves-mobile.png';

const ShoppingListSection = styled.section`
  padding: 114px 0 100px;

  @media screen and (max-width: 767px) {
    background-image: url(${leavesMobile});
    background-repeat: no-repeat;
    background-position: bottom -246px left;
  }
  @media screen and (min-width: 768px) {
    padding: 136px 0 200px;

    background-image: url(${leavesTablet});
    background-repeat: no-repeat;
    background-position: bottom -370px left;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 164px;
    
    background-image: url(${leavesDesktop});
    background-position: bottom -520px left;
  }
`

const Container = styled.div`
  position: relative;

  width: 375px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 100px;
  }
`;

const Title = styled.div`
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 72px;
  }
`;



export { ShoppingListSection, Container, Title };