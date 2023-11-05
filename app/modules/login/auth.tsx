import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../shared/redux/store';
import {AuthenticateStack} from '../../navigators/authenticate_stack';

export const AuthPage = () => {
  return (
    <Provider store={store}>
      <AuthenticateStack />
    </Provider>
  );
};
