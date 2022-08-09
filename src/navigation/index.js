import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import CurrencyList from '../screens/CurrenciesList';
import SplashScreen from '../screens/Splash';
import Settings from '../screens/Settings';
import ThemesScreens from '../screens/Themes';
const ApplicationStack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <ApplicationStack.Navigator initialRouteName='Splash'>
      <ApplicationStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <ApplicationStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <ApplicationStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <ApplicationStack.Screen name='CurrencyList' component={CurrencyList} options={{ headerShown: false }} />
        <ApplicationStack.Screen name='Settings' component={Settings} />
        <ApplicationStack.Screen name='Themes' component={ThemesScreens} />
      </ApplicationStack.Navigator>
    </NavigationContainer>
  );
}