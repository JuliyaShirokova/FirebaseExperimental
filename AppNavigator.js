import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterLoginPasswordScreen from './screens/RegisterEmailPasswordScreen';
import LoginFacebookScreen from './screens/LoginFacebookScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    RegisterLoginPassword: RegisterLoginPasswordScreen,
    LoginEmailPassword: LoginScreen,
    LoginFacebook: LoginFacebookScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
