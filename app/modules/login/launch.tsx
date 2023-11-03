import {Dimensions, Image, StyleSheet, View} from 'react-native';

export const Launch = () => {
  return (
    <View style={style.container}>
      <Image source={require('./splash_icon.png')} style={style.image} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 430,
    width: Dimensions.get('screen').width,
  },
});
