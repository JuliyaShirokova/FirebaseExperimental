import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("RegisterLoginPassword")
            }
            style={styles.buttonStyle}
          >
            <Text>Email && Password Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoginEmailPassword")}
            style={styles.buttonStyle}
          >
            <Text>Email && Password login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoginFacebook")}
            style={styles.buttonStyle}
          >
            <Text>Login with Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoginGoogle")}
            style={styles.buttonStyle}
          >
            <Text>Login with Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoginTwitter")}
            style={styles.buttonStyle}
          >
            <Text>Login with Twitter</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  buttonContainer: {
    width: 280,
    height: 40
  },
  buttonStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f1e3d3",
    justifyContent: "center",
    alignItems: "center"
  }
});
