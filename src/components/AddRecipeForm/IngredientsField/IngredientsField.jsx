import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  DeleteBtn,
 
  InputIngredientsWrap,
  
  TitleIngredients,
  WrapIngredients,
} from './IngredientsField.styled';
import {MeasureTypeSelector} from '../Selectors/MeasureSelector';
import {IngredientsSelector} from '../Selectors/IngredientsSelector';
import { Counter } from '../Counter/Counter';
import { useSearchParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

const getIngredientsByQuery = async query => {
  const response = await axios.get(
    `https://soyummy-tw3y.onrender.com/api/v1/ingredients?query=${query}`
  );
  const { data } = response.data;
  return data;
};

export const IngredientsField = ({
  onInput,
  inputs,
  onSetValue,
  handleSubmit,
}) => {
  const [count, setCount] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputFields, setInputFields] = useState([]);

  const [activeInputIndex, setActiveInputIndex] = useState(-1);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    // onSetValue(inputFields);
    setActiveInputIndex(index);
    updateQueryString(event);
  };

  const handleSetInputFields = inputFields => {
    onSetValue(inputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: nanoid(), field: '' }]);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
    // onSetValue(inputFields);
  };

  const query = searchParams.get('query' ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }
    const getIngredients = async () => {
      try {
        const data = await getIngredientsByQuery(query);
        setIngredients(data);
      } catch {}
    };
    getIngredients();
  }, [query]);

  // const setInputField = (index, event) => {
  //   // console.log(event.currentTarget);
  //   // console.log(index);
  //   // inputFields.map(({field, index}) => )
  // };

  const updateQueryString = e => {
    const { value } = e.target;
    onInput(e);
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const handleIncrement = () => {
    setCount(state => state + 1);
    handleAddFields();
  };

  const handleDecrement = () => {
    setCount(state => state - 1);
    handleRemoveFields();
  };

  const handleDelete = fieldId => {
    setInputFields(inputFields.filter(({ id }) => id !== fieldId));
    // onSetValue(inputs.ingredients);
    setCount(state => state - 1);
    // onSetValue(inputFields);
  };

  return (
    <>
      <WrapIngredients>
        <TitleIngredients>Ingredients</TitleIngredients>
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </WrapIngredients>

      {inputFields.map((inputField, index) => (
        <div key={inputField.id}>
          <InputIngredientsWrap>
            
            <IngredientsSelector/>
          <MeasureTypeSelector/>
            <DeleteBtn onClick={() => handleDelete(inputField.id)} />
          </InputIngredientsWrap>
          {activeInputIndex === index && (
            <ul>
              {ingredients.map(({ _id, ttl }) => {
                return (
                  <li
                    key={_id}
                    id={_id}
                    onClick={() => {
                      // console.log(inputFields);
                      inputField.field = ttl;
                      setActiveInputIndex(-1);
                      handleSetInputFields(inputFields);
                      // handleChangeInput(index, event);
                    }}
                  >
                    <p>{ttl}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};