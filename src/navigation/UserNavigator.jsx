import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Users/Home/Dashboard.jsx';

const UserNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
        }}>
        <Tab.Screen name="Home" component={AllDashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigator;

const Stack = createNativeStackNavigator();

function AllDashboard() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'flip'}}
      initialRouteName="dashboard">
      <Stack.Screen name="dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
