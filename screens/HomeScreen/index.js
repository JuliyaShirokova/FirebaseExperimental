import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Email && Password login"
          onPress={() => this.props.navigation.navigate("RegisterLoginPassword")}
          style={styles.buttonLogin}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  buttonLogin: {
    width: 280,
    height: 40,
    marginVertical: 10,
  }
});
