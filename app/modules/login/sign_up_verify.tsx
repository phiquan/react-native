import {Formik} from 'formik';
import {Dimensions, Keyboard, StyleSheet, View} from 'react-native';
import {AppText} from '../../common/appText';
import {AppTextInput} from '../../common/appTextInput';
import * as yup from 'yup';
import {Button} from '@rneui/base';
import {useCountDown} from '../../hook/useCountdown';
import {LoadingAnimation} from '../../study/loader';
import {useEffect, useMemo, useState} from 'react';
import {AppPopUp} from '../../common/appPopUp';
export const SignUpVerify = ({navigation}: {navigation: any}): JSX.Element => {
  const {isStart, duration, reCountDown} = useCountDown(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
        setIsPopUp(true);
      }, 3000);
    }
  }, [isLoading]);

  return (
    <Formik
      initialValues={{otp: ''}}
      onSubmit={value => setIsLoading(true)}
      validationSchema={yup.object().shape({
        otp: yup.number().required(),
      })}>
      {({values, handleChange, handleBlur, handleSubmit, errors, isValid}) => (
        <View style={style.container} onTouchStart={() => Keyboard.dismiss()}>
          <AppText
            text="Enter the OTP that sent to your email"
            size={14}
            fontWeight="500"
          />
          <View style={style.spacing} />
          <AppTextInput
            title="OTP"
            value={values.otp}
            hintText="Enter your OTP code"
            onChangeValue={handleChange('otp')}
            onBlur={() => handleBlur('otp')}
            valid={errors.otp !== undefined}
            validError={errors.otp}
            inputMode="numeric"
          />
          <View style={style.spacing} />
          <Button
            title={isStart ? `Resend after ${duration}s` : 'Resend'}
            type="clear"
            disabled={isStart}
            titleStyle={{fontSize: 14}}
            onPress={() => reCountDown()}
          />
          <View style={{flex: 1}} />
          
          <Button
            title="Verify"
            disabled={!isValid}
            onPress={() => handleSubmit()}
          />
          {isLoading && <LoadingAnimation styleView={style.loading} />}
          {isPopUp && <AppPopUp
            openPopUp={isPopUp}
            title="Registration Successful"
            content="Your registration has been successfully completed. You are now a member of our platform. Enjoy seamless access to all the features and benefits we offer."
            titleClosePopUp="Sign In"
            onClosePopUp={() => navigation.popToTop()}
          />}
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
  spacing: {
    height: 12,
  },
  loading: {
    position: 'absolute',
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
