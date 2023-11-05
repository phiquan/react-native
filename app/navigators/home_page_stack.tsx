import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ImageSourcePropType, View} from 'react-native';
import {Button, Image} from '@rneui/base';
import { AppTab } from './app_tab';
import { Filter } from '../modules/home/filter';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export const HomePageStack = (): JSX.Element => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={AppTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Filter" component={Filter} />
      </Stack.Navigator>
  );
};
