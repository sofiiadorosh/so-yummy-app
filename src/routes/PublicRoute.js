import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRefreshToken } from 'redux/auth/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectRefreshToken);
  return token ? <Navigate to={redirectTo} replace /> : Component;
};

export default PublicRoute;