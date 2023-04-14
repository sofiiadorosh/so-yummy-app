import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// import { getCurrentUser } from 'redux/auth/operations';
import { addToOwnRecipes } from 'redux/ownRecipes/operations';
import { selectSearchType } from 'redux/search/searchSelectors';
// import { selectIngredients } from 'redux/ownRecipes/selectors';

import {
  InputUpload,
  Wrap,
  Form,
  ImgUploadWrap,
  MainWrapIngredients,
  WrapPreparation,
  Description,
  ImageInput,
  ButtonAdd,
  MainRecipe,
} from './AddRecipeForm.styled';
import { RecipeDescriptionFields } from './RecipeDescriptionFields/RecipeDescriptionFields';
import { RecipePreparationFields } from './RecipePreparationFields/RecipePreparationFields';
import { RecipeIngredientsFields } from './RecipeIngredientsFields/RecipeIngredientsFields';
import recipeButtonImage from 'images/add-recipe-placeholder-button.png';



const initialValues = {
  title: '',
  description: '',
  category: '',
  time: '',
  ingredients: [],
  instructions: '',
};



export const AddRecipeForm = () => {
  const [recipes, setRecipes] = useState(initialValues);
  const [picture, setPicture] = useState(recipeButtonImage);
  const [fieldsVisibility, setFieldsVisibility] = useState(true);

  const ingredient = useSelector(selectSearchType); 
  console.log(ingredient)
  // const ingredients = useSelector(selectIngredients);
  const dispatch = useDispatch();

  const picOnChange = e => {
    const [file] = e.target.files;
    if (file) {
      setPicture(URL.createObjectURL(file));
    }
  };

  const toggleVisibility = () => {
    setFieldsVisibility(true);
  };

const handleChange = event => {
  const { name, value } = event.target;
  setRecipes(prevState => ({ ...prevState, [name]: value }));
};

const handleSetValue = data => {
  const ingredients = data.map(({ id, name }) => ({ id, name }));
  setRecipes(prevState => ({
    ...prevState,
    ingredients,
  }));
};

const handleSubmit = e => {
  e.preventDefault();
  const files = document.getElementById('image').files[0];
  const formData = new FormData();
  if (files) {
    formData.append('image', files);
    console.log('image', files);
    
  }
  // formData.append("recipes", recipes);
  // console.log("recipes", recipes)
    formData.append('title', recipes.title);
     console.log('title', recipes.title);
    formData.append('description', recipes.description);
     console.log('description', recipes.description);
    // formData.append('category', selector.category);
    // console.log('category', selector);
    formData.append('time', recipes.time);
    console.log('time', recipes.time);
    formData.append('instructions', recipes.instructions);
    console.log('instructions', recipes.instructions);
    formData.append('ingredients', ingredient);
    console.log('ingredients', ingredient);
  try {
    dispatch(addToOwnRecipes(formData));
    reset();
    // dispatch(getCurrentUser());
    console.log('form submitted');
  } catch (error) {
    console.error(error);
  }
};
  
  const reset = () => {
    setFieldsVisibility(false);
    setRecipes(initialValues);
   
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <MainRecipe>
          <div>
            <Description>
              <ImgUploadWrap>
                <label htmlFor="image">
                  <ImageInput src={picture} alt="recipeButtonImage" />
                </label>
                <InputUpload
                  id="image"
                  type="file"
                  accept="image/*, .jpg, .png, .gif, .web, .jpeg"
                  onChange={picOnChange}
                />
              </ImgUploadWrap>
              <RecipeDescriptionFields
              
                onInput={handleChange}
                inputs={recipes}
              />
            </Description>
            <MainWrapIngredients>
              <RecipeIngredientsFields
                toggleVisibility={toggleVisibility}
                fieldsVisibility={fieldsVisibility}
                onInput={handleChange}
                onSetValue={handleSetValue}
              />
            </MainWrapIngredients>

            <WrapPreparation>
              <RecipePreparationFields
                onInput={handleChange}
                inputs={recipes}
              />
              <ButtonAdd type="submit">Add</ButtonAdd>
            </WrapPreparation>
          </div>
        </MainRecipe>
      </Form>
    </Wrap>
  );
};
