import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  Button,
  Pressable,
  Dimensions,
} from 'react-native';
import {palette} from '../theme/palette';
function AppButton(): JSX.Element {
  return (
    <View style={style.view}>
      <Pressable
        onPress={() => {
          console.log('onPress button');
        }}>
        <View style={style.buttonSolid}>
          <Text style={style.text}>Click me</Text>
        </View>
      </Pressable>
      <View style={{height: 16}}></View>
      <Pressable
        onPress={() => {
          console.log('onPress button');
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'transparent',
            borderRadius: 6,
          },
        ]}>
        <View style={style.buttonOutline}>
          <Text style={{color: palette.primary}}>Click me</Text>
        </View>
      </Pressable>
      <View style={{height: 16}}></View>
      <Pressable
        onPress={() => {
          console.log('onPress button');
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'transparent',
            borderRadius: 6,
          },
        ]}>
        <View style={style.buttonClear}>
          <Text style={{color: palette.primary}}>Click me</Text>
        </View>
      </Pressable>
      <View style={{height: 16}}></View>
      <Pressable
        disabled={true}
        onPress={() => {
          console.log('onPress button');
        }}>
        <View style={style.buttonDisableSolid}>
          <Text style={style.text}>Click me</Text>
        </View>
      </Pressable>
      <View style={{height: 16}}></View>
      <Pressable
        disabled={true}
        onPress={() => {
          console.log('onPress button');
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'transparent',
            borderRadius: 6,
          },
        ]}>
        <View style={style.buttonDisableOutline}>
          <Text style={{color: palette.disabled}}>Click me</Text>
        </View>
      </Pressable>
      <View style={{height: 16}}></View>
      <Pressable
        disabled={true}
        onPress={() => {
          console.log('onPress button');
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'transparent',
            borderRadius: 6,
          },
        ]}>
        <View style={style.buttonClear}>
          <Text style={{color: palette.disabled}}>Click me</Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: palette.white,
  },
  buttonSolid: {
    width: 400,
    height: 48,
    backgroundColor: palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonOutline: {
    width: 400,
    height: 48,
    borderColor: palette.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonClear: {
    width: 400,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonDisableSolid: {
    width: 400,
    height: 48,
    backgroundColor: palette.disabled,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonDisableOutline: {
    width: 400,
    height: 48,
    borderColor: palette.disabled,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});

export default AppButton;
