import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

import Dashboard from '../screens/Users/Home/Dashboard';
import Profile from '../screens/Users/Profile/UserProfile';

import {ms, s} from 'react-native-size-matters';
import {Colors} from '../utils/Colors';
import {Font} from '../utils/font';

const UserNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
          tabBarActiveTintColor: Colors.White,
          tabBarInactiveTintColor: Colors.Grey,
          tabBarLabelStyle: {
            fontSize: s(11),
            textTransform: 'capitalize',
            fontFamily: Font.Work500,
            paddingBottom: ms(3),
          },
        }}>
        <Tab.Screen
          name="home"
          component={AllDashboard}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/image/Icons/home.png')}
                style={styles.Image}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={AllProfile}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/image/Icons/profile.png')}
                style={styles.Image}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export const styles = StyleSheet.create({
  Image: {
    width: s(25),
    height: s(30),
    resizeMode: 'contain',
  },
});

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
function AllProfile() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'flip'}}
      initialRouteName="profile">
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}
