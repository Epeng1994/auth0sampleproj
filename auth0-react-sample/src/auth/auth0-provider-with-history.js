import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

//Component is wrapper around after <Router/> and before <App/> within index.js to allow for redirection using useHistory hook

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  //importing .env variables to be used, can be found within the auth0 site :
  //AUTH_AUDIENCE: AUTH0 custom API -> Settings -> Identifier
  //AUTH_DOMAIN: AUTH0 React/Single Page Application -> Settings -> Domain
  //AUTH_CLIENT_ID: AUTH0 React/Single Page Application -> Settings -> Client Id

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;