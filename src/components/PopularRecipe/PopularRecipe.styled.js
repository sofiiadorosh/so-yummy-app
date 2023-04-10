import { NavLink } from 'react-router-dom';

import styled from 'styled-components';


const WrapperPopular = styled.div`
  margin-top: 72px;
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

const TitlePopular = styled.h3`
  color: ${props => props.theme.colors.secondaryDarkText};
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[7]}px;
  line-height: 1;
  letter-spacing: -0.24px;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const ListPopular = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

const ListItemPopular = styled.li`
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(126, 126, 126, 0.5);
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
  &:nth-child(2) {
    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
    @media screen and (min-width: 1440px) {
      margin-top: 24px;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }
`;


const ListLinkPopular = styled(NavLink)`
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  width: 104px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    /* width: 102px; */
  }
`;

const ItemWrapper = styled.div``;

const ItemTitle = styled.h4`
  margin-bottom: 3px;
  color: ${props => props.theme.colors.secondaryDarkText};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[5]}px;
  line-height: 1.25;
  letter-spacing: -0.24px;
`;

const ItemText = styled.p`
  color: ${props => props.theme.colors.popularRecipeText};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.33;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;


const ErrorMessage = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[3]}px;
  line-height: 1;
  letter-spacing: -0.02em;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.blackText};
  opacity: 0.5;
  margin-bottom: 100px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[7]}px;
    margin-bottom: 140px;
  }
  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes[10]}px;
    margin-bottom: 180px;
  }
`;

export {
    WrapperPopular,
    TitlePopular,
    ListLinkPopular,
    Image,
    ItemWrapper,
    ItemTitle,
    ListPopular,
    ListItemPopular,
    ItemText,
    ErrorMessage,
  };