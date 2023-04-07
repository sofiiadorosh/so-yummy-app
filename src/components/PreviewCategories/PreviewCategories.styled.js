import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoriesSection = styled.section`
  padding: 57px 0 100px;

  @media screen and (min-width: 768px) {
    padding: 72px 0 100px;
  }

  @media screen and (min-width: 1440px) {
    padding: 100px 0 118px;
  }
`;

const Container = styled.div`
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

const CategoriesRecipes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 50px;

    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;

    margin-bottom: 14px;
  }
`;

const Title = styled.h2`
  margin-bottom: 32px;

  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[8]}px;
  line-height: 1;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.tertiaryDarkText};

  @media screen and (min-width: 768px) {
    margin: 0;

    font-size: ${props => props.theme.fontSizes[10]}px;
  }
`;

const Category = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

const SeeAllButton = styled(NavLink)`
  display: block;
  width: 94px;
  margin-top: 24px;
  margin-left: auto;
  padding: 10px 24px;

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.29;

  color: #fafafa;

  background-color: #8baa36;

  border-radius: 6px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: auto;
  }
`;

const OtherButton = styled(NavLink)`
  display: block;
  width: 195px;
  margin: 0 auto;
  padding: 14px 32px;

  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 1.5;

  border: 2px solid #8baa36;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 80px;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 30px;

  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: ${props => props.theme.colors.primaryLightText};
    background-color: ${props => props.theme.colors.greenAccent};
  }

  @media screen and (min-width: 768px) {
    width: 239px;
    padding: 20px 50px;

    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;

export {
  CategoriesSection,
  Container,
  CategoriesRecipes,
  Title,
  Category,
  SeeAllButton,
  OtherButton,
};
