import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { logout } from 'redux/auth/operations'; 

import {
  LogoutForm,
  ButtonWrapper,
  LogoutButton,
  CancelButton,
} from './LogoutBtn.styled';

export const LogoutBtn = ({onClose}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const logoutHandler = () => {
    dispatch(logout())
      .then(() => {
        navigate('/signin');
      });
    onClose();
  };

  return (
    <LogoutForm>
      <p>Are you sure you want to log out?</p>
      <ButtonWrapper>
        <LogoutButton type="button" onClick={logoutHandler} >Log out</LogoutButton>
        <CancelButton onClick={() => { onClose()}} type="button">Cancel</CancelButton>
      </ButtonWrapper>
    </LogoutForm>
  );
};
