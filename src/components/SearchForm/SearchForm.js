import { ButtonSearch } from 'components/ButtonSearch';

import { SearchBar, SearchField } from './SearchForm.styled';
export const SearchForm = () => {
  return (
    <SearchBar autoComplete="off">
      <SearchField>
        <label htmlFor="query">Enter query</label>
        <input id="query" type="text" placeholder="Beef |" />
      </SearchField>
      <ButtonSearch type="submit" text="Search" />
    </SearchBar>
  );
};
