import React, { useState } from 'react';

import recipeButtonImage from "images/add-recipe-placeholder-button.png"

export const AddRecipeForm = () => { 
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(state => state + 1);
  };

  const handleDecrement = () => {
    setCount(state => state - 1);
  };
 return (
  <>
  <div>
    <label htmlFor='file-input'>
      <img src={recipeButtonImage} alt="recipeButtonImage" />
    </label>
  </div>
  </>
 )





}