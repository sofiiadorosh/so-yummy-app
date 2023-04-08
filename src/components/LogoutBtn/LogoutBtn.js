import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { logout } from 'redux/auth/operations'; 

import {
  LogoutForm,
  ButtonWrapper,
  LogoutButton,
  CancelButton,
} from './LogoutBtn.styled';

export const LogoutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout())
      .then(() => {
        navigate('/signin');
      });
  };

  return (
    <LogoutForm>
      <p>Are you sure you want to log out?</p>
      <ButtonWrapper>
        <LogoutButton type="button" onClick={logoutHandler} >Log out</LogoutButton>
        <CancelButton type="button">Cancel</CancelButton>
      </ButtonWrapper>
    </LogoutForm>
  );
};
