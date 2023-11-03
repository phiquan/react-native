import {Image} from '@rneui/base';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import { instance } from './axios_interceptor';

const LoadingAnimation = (): JSX.Element => {
  const [color, setColor] = useState('teal');
  useEffect(() => {
    const id = setInterval(() => {
      setColor(color => (color === 'teal' ? 'royalblue' : 'teal'));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.indicatorWrapper}>
      <ActivityIndicator size="large" color={color} style={styles.indicator} />
    </View>
  );
};

const User = ({userObject}: {userObject: any}): JSX.Element => {
  return (
    <View>
      <Image
        source={{uri: userObject.avatar}}
        style={{width: 200, height: 200, borderRadius: 100}}
      />
      <View style={{height: 12}} />
      <Text style={{textAlign: 'center', fontSize: 20}}>
        {`${userObject.first_name} ${userObject.last_name}`}
      </Text>
    </View>
  );
};

const AppAxios = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        await instance.get('https://reqres.in/api/users/1').then(e => {
          setUser(e.data.data);
        });
      } catch (e) {
        console.log('CALL API FAILED');
      }
    };
    fetchAPI();
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <View style={styles.container}>
      {!isLoading && user && <User userObject={user} />}
      {isLoading && <LoadingAnimation />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default AppAxios;
