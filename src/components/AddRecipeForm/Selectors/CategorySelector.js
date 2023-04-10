import Select from 'react-select';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateSearchType } from 'redux/search/searchSlice';

import { SearchForm, Text } from './Selectors.styled';

const options = [
  { value: 'Beef', label: 'Beef' },
  { value: 'Breakfast', label: 'Breakfast' },
  { value: 'Chicken', label: 'Chicken' },
  { value: 'Dessert', label: 'Dessert' },
  { value: 'Goat', label: 'Goat' },
  { value: 'Lamb', label: 'Lamb' },
  { value: 'Miscellaneous', label: 'Miscellaneous' },
  { value: 'Pasta', label: 'Pasta' },
  { value: 'Pork', label: 'Pork' },
  { value: 'Seafood', label: 'Seafood' },
  { value: 'Side', label: 'Side' },
  { value: 'Starter', label: 'Starter' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'Vegetarian', label: 'Vegetarian' },
];

const portal = document.body;

export const CategorySearchSelector = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(updateSearchType(selectedOption.value));
  };

  return (
    <SearchForm>
      <Text>Category</Text>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        placeholder="Select options"
        menuPosition="absolute"
        menuPortalTarget={portal}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderRadius: '6px',
            backgroundColor: 'transparent',
            
            borderStyle: 'none',
            outline: 'none',
            borderColor: state.isFocused ? 'none' : provided.borderColor,
            boxShadow: state.isFocused ? 'none' : provided.boxShadow,
            color: '#000',
            width: '146px',
            height: '34px',
            '&:hover': {
              backgroundColor: 'transparent',
              borderStyle: 'none',
              borderColor: 'none',
              border: 'none',
              outline: 'none',
              
            },
            '@media (min-width: 768px)': {
              width: '175px',
              height: '41px',
            },
            '@media (min-width: 1440px)': {
              width: '198px',
              height: '49px',
            },
          }),dropdownIndicator: (base, state) => ({
            ...base,
            color: '#8BAA36',
           
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          input: (provided, state) => ({
            ...provided,
            marginBottom: '0',
            color: '#000000',
            font: '14',
            lineHeight: '1.5',
          }),
          menu: () => ({
            border: 'none',
          }),

          menuList: (provided, state) => ({
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '8px',
            height: "154px",
            overflow: 'scroll',
            marginBottom: '10px',
            paddingBottom: '5px',
            font: '12px',
            lineHeight: '18px',
            color: '#rgba(0, 0, 0, 0.5)',
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: 'none',
            outline: 'none',
            borderStyle: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },
            '&:focus': {
              backgroundColor: '#ffffff',
              borderStyle: 'none',
              borderColor: 'none',
              boxShadow: 'none',
              border: 'none',
              outline: 'none',
            },

            width: '146px',

            '@media (min-width: 768px)': {
              width: '175px',

              font: '14px',
              lineHeight: '21px',
            },
            '@media (min-width: 1440px)': {
              width: '198px',
            },
          }),
          option: (provided, state) => ({
            border: 'none',
            paddingLeft: '14px',
            color: '#000000',
            opacity: '0.5',
            padding: '8px',
            cursor: 'pointer',

            '&:hover': {
              color: '#8baa36',
              opacity: '0.75',
              backgroundColor: '#f2ecec',
            },
            '&:focus': {
              backgroundColor: 'transparent',
            },
          }),
        }}
      />
    </SearchForm>
  );
};
