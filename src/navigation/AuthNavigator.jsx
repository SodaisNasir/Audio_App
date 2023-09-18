import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OverBoard from '../screens/Authentication/OverBoard.jsx';
import Register from '../screens/Authentication/Register.jsx';
import Login from '../screens/Authentication/Login';
import OTP from '../screens/Authentication/OTP.jsx';
import Forget_Password from '../screens/Authentication/Forget_Password.jsx';
import Reset_Password from '../screens/Authentication/Reset_Password.jsx';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OverBoard"
        screenOptions={{headerShown: false, animation: 'flip'}}>
        <Stack.Screen name="OverBoard" component={OverBoard} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="forget" component={Forget_Password} />
        <Stack.Screen name="reset" component={Reset_Password} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
