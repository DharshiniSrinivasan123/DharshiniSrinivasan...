import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import ChatBox from './ChatBox';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login"> 
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="ChatBox" component={ChatBox} />
    </Stack.Navigator>
  );
};

export default AppNavigator;