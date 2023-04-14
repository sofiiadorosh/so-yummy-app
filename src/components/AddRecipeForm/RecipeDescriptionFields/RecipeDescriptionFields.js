import React from 'react';

import {
    UnderLane,
    InputDescriptionWrap,
    InputDescription,
    MainWrap,
    LastInputDescriptionWrap
  } from './RecipeDescriptionFields.styled';
import { TimeTypeSelector } from '../Selectors/TimeSelector';
import { CategorySearchSelector } from '../Selectors/CategorySelector';


export const RecipeDescriptionFields = ({ onInput, inputs }) => {
  const handleInputChange = e => {
    onInput(e);
  };
  
  return (
    <MainWrap>
      <InputDescriptionWrap>
        <InputDescription
          required
          type="text"
          name="title"
          id="title"
          value={inputs.title}
          placeholder="Enter item title"
          onChange={handleInputChange}
        />
      </InputDescriptionWrap>
      <InputDescriptionWrap>
        <InputDescription
          required
          type="text"
          name="description"
          id="description"
          value={inputs.description}
          placeholder="Enter about recipe"
          onChange={handleInputChange}
        />
      </InputDescriptionWrap>
      <InputDescriptionWrap>
        <CategorySearchSelector
          name="category"
          id="description"
          value={inputs.category} />
        <UnderLane />
      </InputDescriptionWrap>
      <LastInputDescriptionWrap>
        <TimeTypeSelector />
        <UnderLane />
      </LastInputDescriptionWrap>
    </MainWrap>

  );
}; 