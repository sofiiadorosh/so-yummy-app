import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import {TimeTypeSelector} from "./Selectors/TimeSelector";
import {CategorySearchSelector} from "./Selectors/CategorySelector";
import{MeasureTypeSelector} from "./Selectors/MeasureSelector";
import{IngredientsSelector} from "./Selectors/IngredientsSelector";
import { Counter } from './Counter/Counter';
import {
  InputUpload,
  Wrap,
  UnderLane,
  Form,
  ImgUploadWrap,
  InputDescriptionWrap,
  InputDescription,
  TitleIngredients,
  WrapIngredients,
  InputIngredientsWrap,
  MainWrapIngredients,
  TitlePreparation,
  WrapPreparation,
  TextAreaPreparation,
  ButtonAdd,
  WrapButtonAdd,
  Description,
  
} from './AddRecipeForm.styled';
import recipeButtonImage from "images/add-recipe-placeholder-button.png"

export const AddRecipeForm = () => { 
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(state => state + 1);
  };

  const handleDecrement = () => {
    setCount(state => state - 1);
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
          <WrapIngredients>
            <TitleIngredients>Ingredients</TitleIngredients>
            <Counter
              count={count}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          </WrapIngredients>

          <InputIngredientsWrap>
            
            <IngredientsSelector/>
              <MeasureTypeSelector/>
            
            <IoCloseOutline size={18} />
          </InputIngredientsWrap>
          <InputIngredientsWrap>
          <MeasureTypeSelector/>
            <IoCloseOutline size={18} />
          </InputIngredientsWrap>

          <WrapPreparation>
            <TitlePreparation>Recipe Preparation</TitlePreparation>
            <TextAreaPreparation
              name=""
              id=""
              // cols="30"
              rows="7"
              placeholder="Enter recipe"
            ></TextAreaPreparation>
          </WrapPreparation>
        </MainWrapIngredients>
        <WrapButtonAdd>
          <ButtonAdd type="submit">Add</ButtonAdd>
        </WrapButtonAdd>
      </Form>
    </Wrap>
  );
};