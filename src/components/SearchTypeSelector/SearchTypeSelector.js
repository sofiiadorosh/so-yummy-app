import { CustomSelect } from './CustomSelect';

import { Search, SearchForm, Text } from './SearchTypeSelector.styled';

export const SearchTypeSelector = () => {
  return (
    <Search>
      <SearchForm>
        <Text>Search by:</Text>
        <CustomSelect />
      </SearchForm>
    </Search>
  );
};
