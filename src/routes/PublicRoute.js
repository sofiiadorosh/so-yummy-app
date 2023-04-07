import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn} from 'redux/auth/selectors';

export const PublicRoute = ({ component: Component,  restricted = false, redirectTo = '/'}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
      return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};

export default PublicRoute;