import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
const ApplicationStack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <ApplicationStack.Navigator>
        <ApplicationStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <ApplicationStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      </ApplicationStack.Navigator>
    </NavigationContainer>
  );
}