import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../modules/login/sign_in";
import { SignUp } from "../modules/login/sign_up";
import { ForgotPass } from "../modules/login/forgot_password";
import { SignUpVerify } from "../modules/login/sign_up_verify";

const Stack = createNativeStackNavigator();
export const LoginPageStack = () => {
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