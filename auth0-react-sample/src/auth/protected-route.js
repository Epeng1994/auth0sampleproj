// src/auth/protected-route.js

import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from '../components/index';
//allows for page to redirect to an in-between page while it is rendering, in this case it is a Loading component with an animation, if authentication failed, will direct to login/signup page
const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;