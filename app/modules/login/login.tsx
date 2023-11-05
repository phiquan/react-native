import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Launch} from './launch';
import {SignIn} from './sign_in';
import {useEffect, useMemo, useState} from 'react';
import {SignUp} from './sign_up';
import {ForgotPass} from './forgot_password';
import {SignUpVerify} from './sign_up_verify';
import * as React from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {AnyAction} from '@reduxjs/toolkit';
import {store} from '../../shared/redux/store';
import {getToken} from '../../shared/helper/storege_helper';
import {loginSlice} from '../../shared/redux/redux_login';
import {HomePage} from '../staffs/navigation';

const Stack = createNativeStackNavigator();
export const AuthPage = () => {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
};

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state: AnyAction) => state.login.token);
  const dispatch = useDispatch();
  const {setToken} = loginSlice.actions;
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken: string;
      userToken = (await getToken()) ?? '';
      dispatch(setToken(userToken));
    };

    bootstrapAsync();

    setTimeout(() => setIsLoading(false), 2000);
  }, []);
  console.log(token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Splash"
            component={Launch}
            options={{headerShown: false}}
          />
        ) : token === '' ? (
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LoginPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign In'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPass}
        options={{title: 'Forgot Password'}}
      />
      <Stack.Screen
        name="SignUpVerify"
        component={SignUpVerify}
        options={{title: 'Verify'}}
      />
    </Stack.Navigator>
  );
};
