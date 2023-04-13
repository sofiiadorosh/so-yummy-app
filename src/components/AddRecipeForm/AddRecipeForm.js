import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUser } from 'redux/auth/operations';
import { addToOwnRecipes } from 'redux/ownRecipes/operations';

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
  // const [image, setImage] = useState(uploadImg);
  const [fieldsVisibility, setFieldsVisibility] = useState(true);

  const dispatch = useDispatch();

  // const onImageChange = event => {
  //   setImage(event.target.files[0]);
  // };

  // useEffect(() => {
  //   const handleApiImage = () => {
  //     if (image === uploadImg) {
  //       return;
  //     }
  //     const formData = new FormData();
  //     formData.append('image', image);
  //     try {
  //       axios
  //         .patch(
  //           'https://soyummy-tw3y.onrender.com/api/v1/own-recipes/upload',
  //           formData
  //         )
  //         .then(({ data }) => {
  //           setImage(data.data);
  //         });
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   handleApiImage();
  // }, [image]);



  const toggleVisibility = () => {
    setFieldsVisibility(true);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setRecipes(prevState => ({ ...prevState, [name]: value }));
  };

const handleSetValue = data => {
  const ingredients = data.map(({ id }) => id);
  setRecipes(prevState => ({
    ...prevState,
    ingredients,
  }));
};

  const handleSubmit = e => {
    e.preventDefault();
    
    dispatch(addToOwnRecipes(recipes));
    reset();
    dispatch(getCurrentUser());
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
                <label htmlFor="file-input">
                  <ImageInput src={recipeButtonImage} alt="recipeButtonImage" />
                </label>
                <InputUpload
                  id="file-input"
                  type="file"
                  accept="image/png, image/jpeg"
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
