import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSearchQuery } from 'redux/search/searchSlice';

import { ButtonSearch } from 'components/ButtonSearch';

import { SearchBar, SearchField } from './SearchForm.styled';
export const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.query.value;

    dispatch(updateSearchQuery(query));

    navigate(`/search`);
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
