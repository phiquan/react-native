import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import {palette} from '../../theme/palette';
import {Button} from '@rneui/base';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useEffect, useState} from 'react';
import  {LoadingAnimation} from '../../common/loader';

export const SignUp = ({navigation}: {navigation: any}) => {
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const [isShowPassWordCofirm, setIsShowPassWordCofirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        navigation.goBack();
      }, 3000);
    }
  }, [isLoading]);

  const inputStyle = {
    height: 48,
    borderWidth: 1,
    flex: 1,
    borderColor: palette.lightStroke,
    padding: 12,
    marginBottom: 5,
    borderRadius: 6,
  };

  const errorStyle = {
    height: 48,
    borderWidth: 1,
    flex: 1,
    borderColor: palette.error,
    padding: 12,
    marginBottom: 5,
    borderRadius: 6,
  };
  return (
    <Formik
      initialValues={{email: '', password: '', confirmPass: ''}}
      onSubmit={values => {
        console.log(values);
        if (values.email !== '') {
          setIsLoading(true);
        }
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required(),
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
        <View style={style.view}>
          <Text
            style={{
              justifyContent: 'flex-start',
              width: 400,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Email
          </Text>
          <View style={{height: 4}}></View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={values.email}
              style={errors.email ? errorStyle : inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            <Pressable
              onPress={() => {
                setFieldValue('email', '');
              }}>
              <Image source={require('./delete.png')} style={style.image} />
            </Pressable>
          </View>
          {touched.email && errors.email && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.email}</Text>
          )}
          <View style={{height: 18}} />
          <Text
            style={{
              justifyContent: 'flex-start',
              width: 400,
              fontSize: 14,
              fontWeight: '500',
            }}>
            Password
          </Text>
          <View style={{height: 4}}></View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={style.textinput}
              secureTextEntry={isShowPassWord}
              onChangeText={handleChange('password')}
            />
            <Pressable
              onPress={() => {
                setIsShowPassWord(prev => !prev);
              }}>
              <Image
                source={
                  isShowPassWord
                    ? require('./eye-slash.png')
                    : require('./eye.png')
                }
                style={style.image}
              />
            </Pressable>
          </View>

          <View style={{height: 18}} />
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
  textinput: {
    height: 48,
    flex: 1,
    borderWidth: 1,
    borderColor: palette.lightStroke,
    padding: 12,
    marginBottom: 5,
    borderRadius: 6,
  },
  image: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 12,
    top: 12,
  },
  loading: {
    position: 'absolute',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
