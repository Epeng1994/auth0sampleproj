import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from '../components/index';

//Employs withAutenticationRequired hook from auth0 that checks if request is authenticated if not, will redirect to login page
//can use onRedirecting as second argument to show a temporary loading component while page generates
//use as template to generate protected routes

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;