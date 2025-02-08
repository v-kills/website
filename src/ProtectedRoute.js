import React from 'react';
    import { Route, Navigate } from 'react-router-dom';
    import { useAuth } from './AuthContext'; // Assuming you have an AuthContext

    function ProtectedRoute({ children, ...rest }) {
      const { isAuthenticated } = useAuth();
      return (
        <Route
          {...rest}
          render={({ location }) =>
            isAuthenticated ? (
              children
            ) : (
              <Navigate
                to="/login"
                replace
                state={{ from: location }}
              />
            )
          }
        />
      );
    }

    export default ProtectedRoute;