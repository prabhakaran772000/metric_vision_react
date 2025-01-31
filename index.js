// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from 'react-oidc-context';
import App from './App';

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_42MuR5mWT",
  client_id: "668e6hauea4i49gc1a40qt7vn0",
  redirect_uri: "https://cskcustomer1.s3.us-east-1.amazonaws.com/metrics.html",
  response_type: "code",
  scope: "email openid phone",
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);