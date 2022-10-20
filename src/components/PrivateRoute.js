
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" />;
  }
  // console.log(user,5)
  return children;
};

export default PrivateRoute;
