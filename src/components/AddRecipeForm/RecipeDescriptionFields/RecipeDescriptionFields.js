import React from 'react';

import {
    UnderLane,
    InputDescriptionWrap,
    InputDescription,
    
  } from './RecipeDescriptionFields.styled';
import { TimeTypeSelector } from '../Selectors/TimeSelector';
import { CategorySearchSelector } from '../Selectors/CategorySelector';


export const RecipeDescriptionFields = ({ onInput, inputs }) => {
    const handleInputChange = e => {
      onInput(e);
    };
  
    return (
<div>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter item title"
                onChange={handleInputChange}
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter about recipe"
                onChange={handleInputChange}
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <CategorySearchSelector />
              <UnderLane />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <TimeTypeSelector />
              <UnderLane />
            </InputDescriptionWrap>
          </div>

    );
};