import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import {TimeTypeSelector} from "./Selectors/TimeSelector";
import {CategorySearchSelector} from "./Selectors/CategorySelector";
import{MeasureTypeSelector} from "./Selectors/MeasureSelector";
import { Counter } from './Counter/Counter';
import {SelectOptionIngredients,
  InputUpload,
 
  Wrap,
  Form,
  ImgUploadWrap,
  InputDescriptionWrap,
  InputDescription,
  
  TitleIngredients,
  WrapIngredients,
  InputIngredientsWrap,
  MainWrapIngredients,
  InputIngredients,
  SelectIngredients,
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
              <InputDescription
                type="text"
                name=""
                id=""
                placeholder="Category"
                disabled
              />
              <CategorySearchSelector/>
            </InputDescriptionWrap>
            <InputDescriptionWrap>
              <InputDescription
                type="text"
                name=""
                id="cooking-time"
                placeholder="Cooking time"
                disabled
              />
             
                  <TimeTypeSelector/>
              
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
            <div>
              <InputIngredients type="text" name="" id="" placeholder="" />
              <MeasureTypeSelector/>
            </div>
            <IoCloseOutline size={18} />
          </InputIngredientsWrap>
          <InputIngredientsWrap>
            <div>
              <InputIngredients type="text" name="" id="" placeholder="" />
              <SelectIngredients name="ingredients" id="ingredients">
                <option value="tbs">tbs</option>
                <option value="tsp">tsp</option>
                <option value="kg">kg</option>
                <option value="g">g</option>
              </SelectIngredients>
            </div>
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