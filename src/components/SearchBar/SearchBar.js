import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateSearchQuery } from 'redux/search/searchSlice';
import { SearchTypeSelector } from 'components/SearchTypeSelector';

import {
  SearchBlock,
  SearchInForm,
  SearchInput,
  ButtonSearch,
  Container,
} from './SearchBar.styled';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const onFormSubmit = e => {
    e.preventDefault();
    const newSearchQuery = e.target.elements.search.value;
    dispatch(updateSearchQuery(newSearchQuery));
  };

  return (
    <Container>
      <SearchBlock>
        <SearchInForm onSubmit={onFormSubmit}>
          <SearchInput
            name="search"
            type="text"
            value={inputValue}
            placeholder="Enter query"
            onChange={handleInputChange}
          />
          <ButtonSearch type="submit" text="Search">
            Search
          </ButtonSearch>
        </SearchInForm>
      </SearchBlock>
      <SearchTypeSelector />
    </Container>
  );
};
