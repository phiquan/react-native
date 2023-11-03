import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Launch} from './launch';
import {SignIn} from './sign_in';
import {useEffect, useState} from 'react';
import {SignUp} from './sign_up';
import {ForgotPass} from './forgot_password';

const Stack = createNativeStackNavigator();

export const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
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
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
