import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateSearchType } from 'redux/search/searchSlice';
import { StyledSelect } from './CustomSelect.styled';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredient' },
];

const portal = document.querySelector('#modalPortal');

export const CustomSelect = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(updateSearchType(selectedOption.value));
  };

  return (
    <StyledSelect
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Select options"
      menuPosition="absolute"
      menuPortalTarget={portal}
    />
  );
};
