import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectRefreshToken } from 'redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectRefreshToken);
  return token ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;