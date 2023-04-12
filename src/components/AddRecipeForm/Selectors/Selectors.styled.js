import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
 
`;

export const MeasureSearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  
  margin: auto;
 
`;

export const Text = styled.span`
  opacity:0.5;
  color: #000;
  font-weight: 400 ;
  font-size: 14 px;
  letter-spacing:-0.02em;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes[3]}px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1440px) {
    line-height: 1.29;
  }
`;
export const CustomInput = styled.input`
width: 20px;
 position: relative;
 left: 5px;
  height: 53px;
  border: none;
  &:focus-within {
    outline: none;
  }
  background:#F5F5F5;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  @media screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
    text-align: center;
  }
`;