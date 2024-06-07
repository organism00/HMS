import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoutes } from './paths';

const PrivateRoute = ({ element: Element }) => {
  
  const isAuthenticated = sessionStorage.getItem('isAuthenticated');

  return isAuthenticated ? <Element /> : <Navigate to={AppRoutes.app} replace />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;