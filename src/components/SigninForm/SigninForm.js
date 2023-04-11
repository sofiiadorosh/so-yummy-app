import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import * as yup from 'yup';

import { login, getCurrentUser } from 'redux/auth/operations';
import { RegisterBackground, RegisterContainer, ImageContainer, AuthImage, RegisterFormBox, Title, FormBox, InputBox, IconBox, EmailIcon, PasswordIcon, FormInput, FormButton , AuthLink} from '../RegisterForm/RegisterForm.styled';


let initialValues = {
  email: "",
  password: "",
};

export const SigninForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  
  const dispatch = useDispatch();

  const emailRegExp = /^\w+([.-]?\w+){2}@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]+$/;

  let loginSchema = yup.object().shape({
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
      .matches(/[a-zа-яA-ZА-ЯіїЇІєЄ]/, 'Your password is little secure.')
      .matches(passwordRegExp)
      .min(6, 'Your password is too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Enter your password please'),
  });
  
  yup.addMethod(yup.string, 'email', function validateEmail(message) {
    return this.matches(emailRegExp, {
      message,
      name: 'email',
      excludeEmptyString: true,
    });
  });
  
  const getColor = (errors, values, defaultColor = 'rgba(255, 255, 255, 0.8)') => {
    if (errors === 'Your password is little secure') {
      return '#F6C23E'
    }
    return values ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
  };
  
  const onSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    const { email, password } = values;
    dispatch(login({ email, password }))
      .then(res => {
        if (res.payload.name === "AxiosError") {
          setSubmitting(false);
        } else {
          resetForm();
          dispatch(getCurrentUser());
        }
      });
  };
  
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
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={onSubmitHandler}
        >
          {({ errors, values }) => (
            <RegisterFormBox>
              <Title> Sign in </Title>
              <FormBox>
                <InputBox>
                  <IconBox>
                    <EmailIcon color={getColor(errors.email, values.email)} />
                  </IconBox>
                  {/* {values.name && (
                    <ErrorIconBox>
                      <ErrorIcon /> 
                  </ErrorIconBox>
                )} */}
                  <FormInput
                    autoComplete="email"
                    placeholder="Email"
                    type='text'
                    name="email"
                    color={getColor(errors.email, values.email)}
                    bordercolor={getColor(
                      errors.email,
                      values.email,
                      'rgba(255, 255, 255, 0.3)'
                    )}
                  />
                </InputBox>
                <InputBox>
                  <IconBox onClick={passwordShownToggle}>
                    <PasswordIcon color={getColor(errors.password, values.password)} />
                  </IconBox>
                  {/* {values.name && (
                    <ErrorIconBox>
                      <ErrorIcon /> 
                  </ErrorIconBox>
                )} */}
                  <FormInput
                    autoComplete="password"
                    placeholder="Password"
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    color={getColor(errors.password, values.password)}
                    bordercolor={getColor(
                      errors.password,
                      values.password,
                      'rgba(255, 255, 255, 0.3)'
                    )}
                  />
                </InputBox>
              </FormBox>
              <FormButton
                type="submit"
                disabled={
                  errors.password || errors.email || errors.name || !values.password ? true : false
                }
              >
                Sign in
              </FormButton>
              <AuthLink to="/register"> Registration </AuthLink>
            </RegisterFormBox>
          )}
        </Formik>
      </RegisterContainer>
    </>
  )
}; 
