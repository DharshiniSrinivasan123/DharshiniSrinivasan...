// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatBox from './ChatBox';// Check the path here
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ChatBox" component={ChatBox} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// LoginPage.js (unchanged from your provided code)

// ChatBox.js (unchanged from your provided code)