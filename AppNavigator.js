import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterLoginPasswordScreen from './screens/RegisterEmailPasswordScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    RegisterLoginPassword: RegisterLoginPasswordScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
