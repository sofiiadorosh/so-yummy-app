import { SearchForm } from 'components/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector';

export const SearchBar = () => {
  return (
    <div>
      <SearchForm />
      <SearchTypeSelector />
    </div>
  );
};
