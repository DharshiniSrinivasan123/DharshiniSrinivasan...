//navigate LoginPage to ChatBox
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import ChatBox from './ChatBox';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ChatBox" component={ChatBox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
