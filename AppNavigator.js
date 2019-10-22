import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterLoginPasswordScreen from './screens/RegisterEmailPasswordScreen';
import LoginFacebookScreen from './screens/LoginFacebookScreen';
import LoginGoogleScreen from './screens/LoginGoogleScreen';
import LoginTwitterScreen from './screens/LoginTwitterScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    RegisterLoginPassword: RegisterLoginPasswordScreen,
    LoginEmailPassword: LoginScreen,
    LoginFacebook: LoginFacebookScreen,
    LoginGoogle: LoginGoogleScreen,
    LoginTwitter: LoginTwitterScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;
