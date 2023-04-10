import React, { useState } from 'react';

import axios from 'axios';

import {TimeTypeSelector} from "./Selectors/TimeSelector";
import {CategorySearchSelector} from "./Selectors/CategorySelector";
import { PopularRecipe } from 'components/PopularRecipe';

import {
  InputUpload,
  Wrap,
  UnderLane,
  Form,
  ImgUploadWrap,
  InputDescriptionWrap,
  InputDescription,
  InputIngredientsWrap,
  MainWrapIngredients,
  WrapPreparation,
  WrapButtonAdd,
  Description,
  
} from './AddRecipeForm.styled';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import {IngredientsField} from "./RecipeIngredientsFields/RecipeIngredientsFields"
import recipeButtonImage from "images/add-recipe-placeholder-button.png"



const initialValues = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [],
  instructions: '',
};




export const AddRecipeForm = () => {
  const [descriptionFields, setDescriptionFields] = useState(initialValues);

  const addRecipe = async text => {
    try {
      const response = await axios.post(
        'https://so-yummy-app-backend.onrender.com/api/ownRecipes',
        text
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  };
 

  const handleChange = event => {
    const { name, value } = event.target;
    setDescriptionFields(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSetValue = data => {
    const filteredFields = data.filter(({ field }) => field !== '');
    const fields = filteredFields.map(({ field }) => field);

    // console.log(fields);
    setDescriptionFields(prevState => ({
      ...prevState,
      ingredients: fields,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(descriptionFields);
    addRecipe(descriptionFields);
    reset();
  };

 return ( <Wrap>

  <Form>
    <Description>
      <ImgUploadWrap>
    <label htmlFor='file-input'>
      <img src={recipeButtonImage} alt="recipeButtonImage" />
    </label>
    <InputUpload  id="file-input" type='file' accept="image/png, image/jpeg" />
  </ImgUploadWrap>
  <div>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter item title"
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Enter about recipe"
              />
            </InputDescriptionWrap>
            <InputDescriptionWrap>
                  <CategorySearchSelector/>
                    <UnderLane/>
            </InputDescriptionWrap>
                <InputDescriptionWrap>
                  <TimeTypeSelector/>
                    <UnderLane/>
            </InputDescriptionWrap>
          </div>
        </Description>
        <MainWrapIngredients>
          
          <IngredientsField
            handleSubmit={handleSubmit}
            onInput={handleChange}
            inputs={descriptionFields}
            onSetValue={handleSetValue}
          />
         

          <InputIngredientsWrap>
            
          
          </InputIngredientsWrap>
          <InputIngredientsWrap>
        
          </InputIngredientsWrap>

          <WrapPreparation>
          <RecipePreparationFields
              onInput={handleChange}
              inputs={descriptionFields}
            />
          </WrapPreparation>
        </MainWrapIngredients>
        <WrapButtonAdd>
         
        </WrapButtonAdd>
        <PopularRecipe/>
      </Form>
    </Wrap>
  );
};