/* import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Login';
import ChatBox from './screen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login"> 
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Chat" component={ChatBox} />
    </Stack.Navigator>
  );
};

export default AppNavigator; */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import AppNavigator from './AppNavigator'; 

const App = () => {
  return (
    <NavigationContainer> 
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;



