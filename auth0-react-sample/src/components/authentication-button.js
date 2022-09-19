import React from 'react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0(); //will check if current user is authenticated
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;