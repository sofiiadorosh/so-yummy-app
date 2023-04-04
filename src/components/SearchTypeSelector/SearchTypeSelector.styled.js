import styled from 'styled-components';

export const Search = styled.div`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 28px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Text = styled.span`
  margin-right: 15px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  /* color: ; */

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.6px;
  }
`;
