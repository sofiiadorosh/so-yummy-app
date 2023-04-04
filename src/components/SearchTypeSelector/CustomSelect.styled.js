import Select from 'react-select';

import styled from 'styled-components';

export const StyledSelect = styled(Select)`
  .Select__control {
    border: none;
    border-radius: 6px;
    background-color: #f2ecec;
    opacity: 0.5;
    border-style: none;
    outline: none;
    border-color: ${({ isFocused }) => (isFocused ? 'none' : 'initial')};
    box-shadow: ${({ isFocused }) => (isFocused ? 'none' : 'initial')};
    color: rgba(0, 0, 0, 0.5);
    width: 146px;
    height: 34px;

    @media (min-width: 768px) {
      width: 175px;
      height: 41px;
    }

    @media (min-width: 1440px) {
      width: 198px;
      height: 49px;
    }
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__input {
    margin-bottom: 0;
    color: #000000;
    font: 14;
    line-height: 1.5;
  }

  .Select__menu {
    border: none;
  }

  .Select__menu-list {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    font: 12px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.5);
    background-color: #ffffff;
    border-radius: 6px;
    border: none;
    outline: none;
    border-style: none;
    border-color: none;
    box-shadow: none;

    &:hover {
      background-color: #ffffff;
      border-style: none;
      border-color: none;
      box-shadow: none;
      border: none;
      outline: none;
    }

    &:focus {
      background-color: #ffffff;
      border-style: none;
      border-color: none;
      box-shadow: none;
      border: none;
      outline: none;
    }

    width: 146px;

    @media (min-width: 768px) {
      width: 175px;
      font: 14px;
      line-height: 21px;
    }

    @media (min-width: 1440px) {
      width: 198px;
    }
  }

  .Select__option {
    border: none;
    padding-left: 14px;
    color: #000000;
    opacity: 0.5;
    padding: 8px;
    cursor: pointer;

    &:hover {
      color: #8baa36;
      opacity: 0.75;
      background-color: #f2ecec;
    }

    &:focus {
      background-color: transparent;
    }
  }
`;
