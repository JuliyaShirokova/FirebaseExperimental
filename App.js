/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Button, StyleSheet, TextInput, Text } from "react-native";
import auth from "@react-native-firebase/auth";
//TODO save credentials

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      errorText: ""
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  formError = error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == "auth/weak-password") {
      this.setState({ errorText: "The password is too weak." });
    } else {
      this.setState({ errorText: errorMessage });
    }
  };

  onHandleLogin = async () => {
    const _login = this.state.login;
    const _password = this.state.password;
    const userCredential = await auth()
      .createUserWithEmailAndPassword(_login, _password)
      .then(res => console.log("login success!", res))
      .catch(err => this.formError(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={login => this.setState({ login })}
          value={this.state.login}
          placeholder="email"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder="password"
          secureTextEntry
        />
        <Button
          title="login"
          onPress={this.onHandleLogin}
          style={styles.buttonLogin}
          />
        <Text style={{ color: "red" }}>{this.state.errorText}</Text>
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
  textInput: {
    width: 250,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 5
  },
  buttonLogin: {
    width: 250,
    height: 40,
  }
});
