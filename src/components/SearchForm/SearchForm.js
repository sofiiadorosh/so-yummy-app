import { ButtonSearch } from 'components/ButtonSearch';
import React, { useState } from 'react';

import { SearchBlock, SearchInForm, SearchInput } from './SearchForm.styled';

export const SearchForm = ({
  handleOnSubmit,
  type = 'title',
  styled,
  Query,
}) => {
  const [searchValue, setInputValue] = useState(Query ?? '');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleOnSubmit(searchValue, type);
  }

  return (
    <SearchBlock>
      <SearchInForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchValue}
          placeholder="Beef |"
          onChange={handleInputChange}
        />
        <ButtonSearch type="submit" text="Search" styled={styled}></ButtonSearch>
      </SearchInForm>
    </SearchBlock>
  );
};
