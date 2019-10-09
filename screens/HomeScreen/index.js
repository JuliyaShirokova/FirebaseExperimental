import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Email && Password Register"
          onPress={() => this.props.navigation.navigate("RegisterLoginPassword")}
          style={styles.buttonStyle}
        />
        <Button
          title="Email && Password login"
          onPress={() => this.props.navigation.navigate("LoginEmailPassword")}
          style={styles.buttonStyle}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  buttonStyle: {
    width: 280,
    height: 40,
  },
});
