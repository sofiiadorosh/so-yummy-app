import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateSearchQuery } from 'redux/search/searchSlice';
import { SearchTypeSelector } from 'components/SearchTypeSelector';

import { ButtonSearch } from 'components/ButtonSearch';

import { SearchBlock, SearchInForm, SearchInput } from './SearchBar.styled';

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
    <>
      <SearchBlock>
        <SearchInForm onSubmit={onFormSubmit}>
          <SearchInput
            name="search"
            type="text"
            value={inputValue}
            placeholder="Beef |"
            onChange={handleInputChange}
          />
          <ButtonSearch
            type="submit"
            text="Search"
            // styled={styled}
          ></ButtonSearch>
        </SearchInForm>
      </SearchBlock>
      <SearchTypeSelector />
    </>
  );
};
