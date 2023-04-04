import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import {
  selectSearchQuery,
  selectSearchResult,
  selectSearchType,
} from 'redux/search/searchSelectors';

import {
  clearSearch,
  updateSearchQuery,
  updateSearchResult,
  updateSearchType,
} from 'redux/search/searchSlice';

import { getSearchByIngredients, getSearchByTitle } from 'services/api/search';

import * as yup from 'yup';

// import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';

import { Input, ButtonWrapper, WrapperForm } from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <WrapperForm>
      <Input></Input>
      <ButtonWrapper>
        <button />
      </ButtonWrapper>
    </WrapperForm>
  );
};
