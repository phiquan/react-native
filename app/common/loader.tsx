import {Image} from '@rneui/base';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

export const LoadingAnimation = ({
  styleView,
}: {
  styleView?: ViewStyle;
}): JSX.Element => {
  const [color, setColor] = useState('teal');
  useEffect(() => {
    const id = setInterval(() => {
      setColor(color => (color === 'teal' ? 'royalblue' : 'teal'));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={[styles.indicatorWrapper, styleView !== null && styleView]}>
      <ActivityIndicator size="large" color={color} style={styles.indicator} />
    </View>
  );
};

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 60000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/image/eye.png')}
        style={{height: 50, width: 50}}
      />
      {loading && <LoadingAnimation />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#888',
    padding: 12,
    marginBottom: 12,
    marginLeft: 8,
    marginRight: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    padding: 12,
    backgroundColor: '#555',
    borderRadius: 12,
  },
  indicatorText: {
    fontSize: 18,
    marginTop: 12,
  },
});

export default Loader;
