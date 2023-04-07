import { useNavigate } from 'react-router-dom';

import { ButtonSearch } from 'components/ButtonSearch';

import { SearchBar, SearchField } from './SearchForm.styled';
export const SearchForm = () => {
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.query.value;
    navigate(`/search?query=${query}`);
  };

  return (
    <SearchBar autoComplete="off" onSubmit={submitHandler}>
      <SearchField>
        <label htmlFor="query">Enter query</label>
        <input id="query" type="text" placeholder="Beef |" name="query" />
      </SearchField>
      <ButtonSearch type="submit" text="Search" />
    </SearchBar>
  );
};
