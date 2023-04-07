import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  
`;

export const Text = styled.span`
  opacity:0.5;
  color: #000;
  font-weight: 400 ;
  font-size: 14 px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    line-height: 1.29;
  }
`;
