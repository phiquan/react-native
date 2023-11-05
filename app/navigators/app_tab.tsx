import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, ImageSourcePropType} from 'react-native';
import {palette} from '../theme/palette';
import {Home, Projet, Setting, Staffs} from './staffs';
import {Button} from '@rneui/base';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const AppTab = ({navigation}: {navigation: any}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let name: ImageSourcePropType;
          if (route.name === 'Home') {
            name = require('./icons/Home.png');
          } else if (route.name === 'Project') {
            name = require('./icons/Project.png');
          } else if (route.name === 'Staff') {
            name = require('./icons/Staff.png');
          } else {
            name = require('./icons/Setting.png');
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
                source={require('./icons/Filter.png')}
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
