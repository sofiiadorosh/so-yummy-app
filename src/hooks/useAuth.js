import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectRefreshToken,
  selectUserName,
  selectAccessToken,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshToken);
  const user = useSelector(selectUserName);
  const token = useSelector(selectAccessToken);

  return { isLoggedIn, isRefreshing, user, token };
};
