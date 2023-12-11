import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Dimensions,
  Keyboard,
} from 'react-native';
import {palette} from '../../theme/palette';
import {Button} from '@rneui/base';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useEffect, useState} from 'react';
import {LoadingAnimation} from '../../study/loader';
import {AppTextInput} from '../../common/appTextInput';
import {AppText} from '../../common/appText';

export const SignUp = ({navigation}: {navigation: any}) => {
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const [isShowPassWordCofirm, setIsShowPassWordCofirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('SignUpVerify');
      }, 2000);
    }
  }, [isLoading]);

  return (
    <Formik
      initialValues={{email: '', passWord: '', confirmPassWord: ''}}
      onSubmit={values => {
        if (values.email !== '') {
          setIsLoading(true);
        }
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required(),
        passWord: yup
          .string()
          .matches(/\w*[a-z]\w*/, 'Password must have a lowecase')
          .matches(/\w*[A-Z]\w*/, 'Password must have a uppercase')
          .matches(/\d/, 'Password must have a number')
          .min(8, ({min}) => `Password must be at least ${min} characters`)
          .required(),
        confirmPassWord: yup
          .string()
          .oneOf([yup.ref('passWord')], 'Passwords do not match')
          .required('Confirm password is required'),
      })}>
      {({
        values,
        handleChange,
        errors,
        touched,
        isValid,
        handleSubmit,
        setFieldTouched,
        setFieldValue,
      }) => (
        <View style={style.view} onTouchStart={() => Keyboard.dismiss()}>
          <AppTextInput
            title="Email"
            hintText='Email...'
            value={values.email}
            onChangeValue={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            suffixIcon={require('./delete.png')}
            onPressSuffix={() => setFieldValue('email', '')}
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
            secureTextEntry={isShowPassWord}
            onPressSuffix={() => setIsShowPassWord(pre => !pre)}
            valid={errors.passWord !== undefined}
            validError={errors.passWord}
          />
          <View style={{height: 12}} />
          <AppText
            text="At least 8 characters, with least 1 uppercase, 1 lowercase and 1 number"
            size={12}
            color={palette.lightStroke}
          />
          <View style={{height: 12}} />
          <AppTextInput
            value={values.confirmPassWord}
            onChangeValue={handleChange('confirmPassWord')}
            title="Confirm Password"
            hintText="Confirm Password..."
            suffixIcon={require('./eye.png')}
            onBlur={() => setFieldTouched('confirmPassWord')}
            secureTextEntry={isShowPassWordCofirm}
            onPressSuffix={() => setIsShowPassWordCofirm(pre => !pre)}
            valid={errors.confirmPassWord !== undefined}
            validError={errors.confirmPassWord}
          />
          <View style={{height: 12}} />
          <Button
            type="clear"
            title={'I already have an account. Sign In now'}
            onPress={() => navigation.goBack()}
          />
          <View style={{flex: 1}} />
          <Button
            disabled={!isValid}
            onPress={() => {
              handleSubmit();
            }}
            title={'Sign Up'}
            style={{height: 48}}
          />
          {isLoading && <LoadingAnimation styleView={style.loading} />}
        </View>
      )}
    </Formik>
  );
};

const style = StyleSheet.create({
  view: {
    padding: 16,
    flex: 1,
  },
  loading: {
    position: 'absolute',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
