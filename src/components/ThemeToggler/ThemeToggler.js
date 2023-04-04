import { SwitchBody, Switch } from './ThemeToggler.styled';

export const ThemeToggler = ({ status, onClick }) => {
  return (
    <SwitchBody type="button" onClick={onClick} status={status}>
      <Switch status={status}></Switch>
    </SwitchBody>
  );
};
