import {Keyboard, StyleSheet, View} from 'react-native';
import {Button} from '@rneui/base';
import {Formik} from 'formik';
import {AppTextInput} from '../../common/appTextInput';
import * as yup from 'yup';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginSlice} from '../../shared/redux/redux_login';

export const SignIn = ({navigation}: {navigation: any}) => {
  const [secureTextPassword, setSecureTextPassword] = useState(true);
  const dispatch = useDispatch();
  const {setToken} = loginSlice.actions;
  return (
    <Formik
      initialValues={{email: '', passWord: ''}}
      onSubmit={e => {
        dispatch(setToken('dummy-acthor-token'));
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required(),
        passWord: yup
          .string()
          .min(8, ({min}) => `Password must be at least ${min} characters`)
          .required(),
      })}>
      {({
        values,
        errors,
        handleChange,
        setFieldValue,
        setFieldTouched,
        isValid,
        submitForm,
      }) => (
        <View style={style.container} onTouchStart={() => Keyboard.dismiss()}>
          <AppTextInput
            title="Email"
            value={values.email}
            onChangeValue={handleChange('email')}
            hintText="Email..."
            suffixIcon={require('./delete.png')}
            onPressSuffix={() => setFieldValue('email', '')}
            onBlur={() => setFieldTouched('email')}
            valid={errors.email !== undefined}
            validError={errors.email}
            inputMode="email"
          />
          <View style={{height: 12}} />
          <AppTextInput
            value={values.passWord}
            onChangeValue={handleChange('passWord')}
            title="Password"
            hintText="Password..."
            suffixIcon={require('./eye.png')}
            onBlur={() => setFieldTouched('passWord')}
            secureTextEntry={secureTextPassword}
            onPressSuffix={() => setSecureTextPassword(pre => !pre)}
            valid={errors.passWord !== undefined}
            validError={errors.passWord}
          />
          <View style={{height: 12}} />
          <Button
            type="clear"
            title={'Forgot password?'}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
          <View style={{height: 12}} />
          <Button
            type="clear"
            title={`Don't have account? Create now`}
            onPress={() => navigation.navigate('SignUp')}
          />
          <View style={{flex: 1}} />
          <Button title={'Sign In'} disabled={!isValid} onPress={submitForm} />
        </View>
      )}
    </Formik>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    marginBottom: 12,
  },
});
