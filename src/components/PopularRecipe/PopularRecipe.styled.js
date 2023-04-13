import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 100px;
`;

const FollowWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 40px;
  }
`;

const PopularWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const TitlePopular = styled.h2`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[7]}px;
  line-height: 1;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.secondaryDarkText};
`;

const TitleFollowUS = styled.h2`
  font-weight: ${props => props.theme.fontWeights.semibold};
  font-size: ${props => props.theme.fontSizes[7]}px;
  line-height: 1;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.secondaryDarkText};
`;

const ListPopular = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 24px;
  }
`;

const ListItemPopular = styled.li`
  padding: 0 13.98px 13px 0;

  border-bottom: 1px solid rgba(112, 112, 112, 0.17);

  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 0 13.69px 13px 0;
  }

  @media screen and (min-width: 1440px) {
    width: 319px;
    padding: 0 13px 13px 0;
  }
`;

const ListLinkPopular = styled(NavLink)`
  display: flex;
  align-items: flex-start;
  gap: 12.13px;

  @media screen and (min-width: 768px) {
    gap: 11.76px;
  }

  @media screen and (min-width: 1440px) {
    gap: 11px;
  }
`;

const ItemImg = styled.img`
  width: 104px;
  height: 85px;
  object-fit: cover;

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 102px;
  }

  @media screen and (min-width: 1440px) {
    width: 97px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.31px;
`;

const ItemTitle = styled.h3`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes[4]}px;
  line-height: 1.25;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.secondaryDarkText};
`;

const ItemText = styled.p`
  font-weight: ${props => props.theme.fontWeights.regulr};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.33;
  letter-spacing: -0.24px;

  color: #7e7e7e;
`;

export {
  Wrapper,
  TitleFollowUS,
  TitlePopular,
  ListPopular,
  ListItemPopular,
  ListLinkPopular,
  ItemImg,
  ItemWrapper,
  ItemTitle,
  ItemText,
  FollowWrapper,
  PopularWrapper,
};
