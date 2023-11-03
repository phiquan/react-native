import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button as ClearButton,
} from 'react-native';
import {palette} from '../../theme/palette';
import {Button} from '@rneui/base';

export const SignIn = ({navigation}: {navigation: any}) => {
  return (
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
        <TextInput style={style.textinput} />
        <Image
          source={require('./delete.png')}
          style={{
            width: 24,
            height: 24,
            position: 'absolute',
            right: 12,
            top: 12,
          }}
        />
      </View>
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
        <TextInput style={style.textinput} />
        <Image
          source={require('./eye.png')}
          style={{
            width: 24,
            height: 24,
            position: 'absolute',
            right: 12,
            top: 12,
          }}
        />
      </View>

      <View style={{height: 18}} />
      <Button
        title={'Forgot password?'}
        type="clear"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <View style={{height: 18}} />
      <Button
        title={`Don't have account? Create now`}
        onPress={() => navigation.navigate('SignUp')}
        type="clear"
      />
      <View style={{flex: 1}} />
      <Button title={'Sign In'} style={{height: 48}} />
    </View>
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
});
