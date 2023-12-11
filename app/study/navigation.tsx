import {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({route, navigation}: {navigation: any; route: any}) {
  useEffect(() => {
    if (route.params?.name) {
      console.log(route.params?.name);
    }
  }, [route.params?.name]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            name: 'SparkMinds',
          })
        }
      />
    </View>
  );
}

function DetailsScreen({route, navigation}: {route: any; navigation: any}) {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button onPress={() => setCount(c => c + 1)} title="Update count" />
  //     ),
  //   });
  // }, [navigation, setCount]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{count}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.navigate({
            name: 'Home',
            params: {name: 'haha'},
            merge: true,
          })
        }
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{name: 'initParams'}}
          options={{
            title: 'My Details',
            headerRight: () => (
              <Button
                onPress={() => console.log('This is a button!')}
                title="Info"
                color="#00cc00"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App1;
