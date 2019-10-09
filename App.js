/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />
};
export default App;
