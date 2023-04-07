import { SwitchBody, Switch } from './ThemeToggler.styled';

export const ThemeToggler = ({ status, onClick }) => {
  return (
    <SwitchBody type="button" status={status}>
      <input type="checkbox" checked={status} onChange={onClick} />
      <Switch status={status}></Switch>
    </SwitchBody>
  );
};
