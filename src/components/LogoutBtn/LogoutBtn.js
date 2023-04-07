import {
  LogoutForm,
  ButtonWrapper,
  LogoutButton,
  CancelButton,
} from './LogoutBtn.styled';

export const LogoutBtn = () => {
  return (
    <LogoutForm>
      <p>Are you sure you want to log out?</p>
      <ButtonWrapper>
        <LogoutButton type="button">Log out</LogoutButton>
        <CancelButton type="button">Cancel</CancelButton>
      </ButtonWrapper>
    </LogoutForm>
  );
};
