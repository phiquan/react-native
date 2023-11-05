import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnyAction} from '@reduxjs/toolkit';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginSlice} from '../shared/redux/redux_login';
import {getToken} from '../shared/helper/storege_helper';
import {NavigationContainer} from '@react-navigation/native';
import {Launch} from '../modules/login/launch';
import {LoginPageStack} from './login_stack';
import {HomePageStack} from './home_page_stack';

const Stack = createNativeStackNavigator();
export const AuthenticateStack = () => {
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
            component={LoginPageStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="HomePageNavigation"
            component={HomePageStack}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
