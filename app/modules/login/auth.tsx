import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from '../../shared/redux/store';
import {AuthenticateStack} from '../../navigators/authenticate_stack';
import {StripeProvider} from '@stripe/stripe-react-native';

export const AuthPage = () => {
  const publishableKey =
    'pk_test_51OEkfJGHVeU9tX1ngiXf9xsctroVHJJBOM1hrBU3kWzmGZAVg6U6mbCqpYfahrcwSYftrj4y6MVKMPmpDu8wXRoI00MNd41Us5';
  return (
    <StripeProvider publishableKey={publishableKey}>
      <Provider store={store}>
        <AuthenticateStack />
      </Provider>
    </StripeProvider>
  );
};
