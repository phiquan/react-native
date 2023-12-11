import React, {Component} from 'react';
import {TextInput, Text, Button, Alert, View, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {palette} from '../theme/palette';
import { NavigationContainer } from '@react-navigation/native';

const Basic = () => {
  const inputStyle = {
    borderWidth: 1,
    borderColor: palette.lightStroke,
    padding: 12,
    marginBottom: 5,
    borderRadius: 6,
  };

  const errorStyle = {
    borderWidth: 1,
    borderColor: palette.error,
    padding: 12,
    marginBottom: 5,
    borderRadius: 6,
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}
      validationSchema={yup.object().shape({
        name: yup.string().required('Please, provide your name!'),
        email: yup.string().email().required(),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={style.formContainer}>
          <TextInput
            value={values.name}
            style={[touched.name && errors.name ? errorStyle : inputStyle]}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder="Name"
          />
          {touched.name && errors.name && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.name}</Text>
          )}
          <TextInput
            value={values.email}
            style={inputStyle}
            onChangeText={handleChange('email')}
            onBlur={() => {
              console.log('ontouch');
              setFieldTouched('email');
            }}
            placeholder="E-mail"
          />
          {touched.email && errors.email && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.email}</Text>
          )}
          <TextInput
            value={values.password}
            style={[inputStyle]}
            onChangeText={handleChange('password')}
            placeholder="Password"
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>
              {errors.password}
            </Text>
          )}
          <Button
            color="#3740FE"
            title="Submit"
            disabled={!isValid}
            onPress={() => {
                handleSubmit()
            }}
          />
        </View>
      )}
    </Formik>
  );
};

const style = StyleSheet.create({
  formContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textinput: {
    height: 48,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: palette.lightStroke,
    paddingHorizontal: 16,
  },

  textinputdart: {
    height: 48,
    width: 400,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: palette.lightStroke,
    paddingHorizontal: 16,
  },
});

const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is Required'),
});

export default Basic;
