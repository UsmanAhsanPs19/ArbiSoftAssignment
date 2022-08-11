import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import Login from '../screens/Login'
import CurrencyList from '../screens/CurrenciesList';
import SplashScreen from '../screens/Splash';
import Settings from '../screens/Settings';
import ThemesScreens from '../screens/Themes';
const ApplicationStack = createNativeStackNavigator();
import {store, persistor} from "../../store";
import {Provider} from "react-redux";

export default function AppNavigation() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ApplicationStack.Navigator initialRouteName='Splash'>
          <ApplicationStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <ApplicationStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <ApplicationStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <ApplicationStack.Screen name='CurrencyList' component={CurrencyList} options={{ headerShown: false }} />
            <ApplicationStack.Screen name='Settings' component={Settings} />
            <ApplicationStack.Screen name='Themes' component={ThemesScreens} />
          </ApplicationStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    
  );
}