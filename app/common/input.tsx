import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {palette} from '../theme/palette';
import type {StatusBarStyle} from 'react-native';

export default function AppInput(): JSX.Element {
  return (
    <View style={style.view}>
      <Text
        style={{
          justifyContent: 'flex-start',
          width: 400,
          fontSize: 14,
          fontWeight: '500',
        }}>
        Title
      </Text>
      <View style={{height: 4}}></View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={style.textinput}
          placeholder="Placeholder..."></TextInput>
        <Image
          source={require('../assets/image/eye.png')}
          style={{
            width: 24,
            height: 24,
            position: 'absolute',
            right: 12,
            top: 12,
          }}
        />
      </View>
      <View style={{height: 32}}></View>
      <View style={{backgroundColor: palette.black, padding: 32}}>
        <Text
          style={{
            justifyContent: 'flex-start',
            width: 400,
            fontSize: 14,
            fontWeight: '500',
            color: palette.lightStroke,
          }}>
          Title
        </Text>
        <View style={{height: 4}}></View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={style.textinputdart}
            placeholder="Placeholder..."
            placeholderTextColor={palette.lightStroke}></TextInput>
          <Image
            source={require('../assets/image/eye.png')}
            style={{
              width: 24,
              height: 24,
              position: 'absolute',
              right: 12,
              top: 12,
            }}
          />
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    height: 48,
    width: 400,
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
