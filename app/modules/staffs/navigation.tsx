import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Projet, Setting, Staffs} from './staffs';
import {ImageSourcePropType, View} from 'react-native';
import {Button, Image} from '@rneui/base';
import {palette} from '../../theme/palette';
import {Filter} from './filter';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const HomePage = ({navigation}: {navigation: any}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let name: ImageSourcePropType;
          if (route.name === 'Home') {
            name = require('./Home.png');
          } else if (route.name === 'Project') {
            name = require('./Project.png');
          } else if (route.name === 'Staff') {
            name = require('./Staff.png');
          } else {
            name = require('./Setting.png');
          }
          return (
            <Image
              source={name}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? palette.primary : palette.disabled,
              }}
            />
          );
        },
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: palette.disabled,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Project" component={Projet} />
      <Tab.Screen
        name="Staff"
        component={Staffs}
        options={{
          title: 'Staffs',
          headerRight: () => (
            <Button type="clear" onPress={() => navigation.navigate('Filter')}>
              <Image
                source={require('./Filter.png')}
                style={{height: 24, width: 24}}
              />
            </Button>
          ),
        }}
      />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export const NavigationScreen = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
