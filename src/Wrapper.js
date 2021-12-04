import React from 'react';
import Router from './Router';
import AuthProvider from './AuthProvider';

const Wrapper = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default Wrapper;
