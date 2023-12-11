import {StyleSheet, Text, View} from 'react-native';

export const Header = ({props}: {props: String}) => {
  return (
    <View style={styles.bgHeader}>
      <Text>{props}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgHeader: {
    backgroundColor: '#0288D1',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  headerStyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
});
