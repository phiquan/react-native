import {Formik} from 'formik';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import {Button} from '@rneui/base';
import {CustomTextInput} from './customTextInput';

export const ForgotPass = () => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={value => {
        console.log(value);
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email("This email was invalid").required(),
      })}>
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        setFieldTouched,
        handleSubmit,
        setFieldValue,
      }) => (
        <View style={style.container}>
          <CustomTextInput
            value={values.email}
            onChangeValue={handleChange('email')}
            title="Email"
            hintText="Email..."
            suffixIcon={require('./delete.png')}
            validError={errors.email}
            valid={errors.email !== undefined && !touched.email}
            onBlur={() => setFieldTouched('email')}
            onPressSuffix={() => setFieldValue('email', '')}
          />
          <View style={{flex: 1}} />
          <Button
            title="Send"
            onPress={() => handleSubmit}
            disabled={!isValid}
          />
        </View>
      )}
    </Formik>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
