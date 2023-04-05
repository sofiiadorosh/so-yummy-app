import React, { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';



import { RegisterBackground, RegisterContainer, ImageContainer, AuthImage } from './RegisterForm.styled';


let initialValues = {
  name: "", 
  email: "",
  password: "",
}

export const RegisterForm = () => {
  const passwordInput = useRef(null);
  const emailInput = useRef(null);
  const nameInput = useRef(null);
  const [clickable, setClickable] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const nameRegExp = /^(?:[\p{L}\p{M}]+(?:[ '-][\p{L}\p{M}]+)*|\d+)$/u;
  const emailRegExp = /^\w+([.-]?\w+){2}@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]+$/;

    let registrationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(nameRegExp, {
        excludeEmptyString: true,
      })
      .min(1, 'Your name must be 1 character at least')
      .max(12, '12 characters max')
      .required('Enter your name please'),
    email: yup
      .string()
      .matches(emailRegExp, {
        message: 'Your email must be valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .min(5, 'Your email is too short')
      .max(254, 'Your email is too long')
      .lowercase()
      .required('Enter your email please'),
    password: yup
      .string()
      .trim()
      .matches(passwordRegExp)
      .matches(/[1-9][a-zа-яA-ZА-ЯіїЇІєЄ]/, 'Your password is little secure.')
      .min(6, 'Your password is too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Enter your password please'),
  });

    const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    });
  
  // const isValid = registrationSchema.isValidSync(formik.values);
  // const clickableButtonHandler = () => {
  //   setClickable(!clickable);
  // };
  
  const passwordShownToggle = () => {
    setPasswordShown(!passwordShown);
  };


  return (
    <>
      <RegisterBackground />
      <RegisterContainer>
        <ImageContainer>
          <AuthImage alt="girl choosing food" /> 
        </ImageContainer>
      </RegisterContainer>
    </>
  )
};

