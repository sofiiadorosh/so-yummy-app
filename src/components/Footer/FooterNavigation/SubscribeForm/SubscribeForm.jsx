import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import instance from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  Form,
  FormInput,
  FormBtn,
  FormWrapText,
  FlagForInput,
} from './SubscribeForm.styled';
import sprite from '../../../../images/Footer/sprite.svg';
import MediaQuery from 'react-responsive';
import { selectAccessToken, selectUserEmail } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { getColor } from '../../../../constants/formikColors';
const LoginSchema = Yup.object().shape({
  email: Yup.mixed().test({
    name: 'email',
    test: value => {
      return /\w+@\w+\.\w{1,5}/.test(value);
    },
  }),
});
export const SubscribeForm = () => {
  const token = useSelector(selectAccessToken);
  const userEmail = useSelector(selectUserEmail);
  const subscribeEmail = async values => {
    try {
      const sendSubscriptionEmail = await instance.post(
        `https://so-yummy-app-backend.onrender.com/api/users/subscribe`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return sendSubscriptionEmail.data;
    } catch (error) {
      throw new Error(error.response.status);
    }
  };
  const getBtn = (errors, value) => !value.email || errors.email;
  return (
    <>
      <Formik
        initialValues={{ email: userEmail || '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          subscribeEmail({ email: values.email })
            .then(r => Notify.success('Сheck your email'))
            .catch(error => {
              if (error === 200) {
                Notify.failure('Unauthorized');
              }
              Notify.warning('Something went wrong');
            });
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <MediaQuery minWidth={1440}>
              <FormWrapText>
                <h2>Subscribe to our Newsletter</h2>
                <p>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </p>
              </FormWrapText>
            </MediaQuery>
            <FormInput
              type="email"
              placeholder="Enter your email address"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.email}
              name="email"
              color={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.8)'
              )}
              borderColor={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.3)'
              )}
            />
            <svg
              className="icon"
              fill={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.8)'
              )}
            >
              <use href={sprite + '#email'}></use>
            </svg>
            {props.values.email && (
              <FlagForInput>
                <svg>
                  <use
                    href={`${sprite}${getColor(
                      props.errors.email,
                      props.values.email,
                      'rgba(255, 255, 255, 0.8)'
                    )}`}
                  ></use>
                </svg>
              </FlagForInput>
            )}

            {props.errors.email && props.values.email && (
              <ErrorMessage className="error" name="email" component="div" />
            )}
            <FormBtn
              type="submit"
              disabled={getBtn(props.errors, props.values)}
            >
              Subcribe
            </FormBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};
