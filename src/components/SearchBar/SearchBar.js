import { useState } from 'react';
import { SearchTypeSelector } from 'components/SearchTypeSelector';

import {
  SearchBlock,
  SearchInForm,
  SearchInput,
  ButtonSearch,
  Container,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit, searchParams }) => {
  const [inputValue, setInputValue] = useState(() => {
    const query = searchParams.get('query');
    return query ? query : '';
  });

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <Container>
      <SearchBlock>
        <SearchInForm onSubmit={onSubmit}>
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
