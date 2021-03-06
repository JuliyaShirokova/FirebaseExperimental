import React, { Component } from "react";
import { View, Button, StyleSheet, TextInput, Text } from "react-native";
import auth from "@react-native-firebase/auth";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      errorText: "",
      successText: "",
      userCredential: "",
      currentUser: undefined,
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

  formSuccess = res => {
    console.log("res", res);
    this.setState({
      successText:
        'User with email "' +
        res.user.email +
        '" was successfuly login',
    });
  };

  onHandleLogin = async () => {
    const _login = this.state.login;
    const _password = this.state.password;
    const userCredential = await auth()
      .signInWithEmailAndPassword(_login, _password)
      .then(res => this.formSuccess(res))
      .catch(err => this.formError(err));
    this.setState({ userCredential });
  };

  onHandleGetCurrent = async () => {
    const user = auth().currentUser;
    this.setState({ currentUser: user });
    console.log('user', user)
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formStyle}>
          <Text style={styles.formTitle}>Login form</Text>
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

          <Text style={[styles.textMessage, { color: "red" }]}>
            {this.state.errorText}
          </Text>
          <Text style={[styles.textMessage, { color: "green" }]}>
            {this.state.successText}
          </Text>
          <Button
            title="get Current User"
            onPress={this.onHandleGetCurrent}
            style={styles.buttonLogin}
          />
          <Text style={styles.textMessage}>Current User - {this.state.currentUser && this.state.currentUser.email}</Text>
        </View>
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
  formStyle: {
    flex: 1,
    marginHorizontal: 20
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "bold"
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
    height: 40
  },
  textMessage: {
    marginHorizontal: 20,
    paddingVertical: 10
  }
});
