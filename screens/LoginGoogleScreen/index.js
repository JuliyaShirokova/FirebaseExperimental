import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { firebase } from '@react-native-firebase/auth';

export default class LoginGoogleScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      userFirebase: {},
      isSigninInProgress: false,
    };
  }

  googleLogin = async () => {
    try {
      
      await GoogleSignin.hasPlayServices();
      // add any configuration settings here:
      await GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'],
        webClientId: '749095622537-2eml88tpkr0tr24n7f7r4fs19g9ergc2.apps.googleusercontent.com', // set required
      });
      
      GoogleSignin.signIn().then(userInfo => {
        console.log('user in Google', userInfo);
        this.setState({ userInfo, isSigninInProgress: false });
        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(
          userInfo.idToken,
          userInfo.accessToken);

        // login with credential
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(user => {
            console.log('user firebase ', user);
            this.setState({userFirebase: user})
          })
      })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("User canceled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        this.setState({ isSigninInProgress: true });
        console.log("Operation is in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("Play services not avaible");
      } else {
        // some other error happened
        console.log("Some other error happend");
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.googleLogin}
          disabled={this.state.isSigninInProgress}
        />
        <View style={styles.userInfoContainer}>
          <Text>Current user email - {this.state.userFirebase.user && this.state.userFirebase.user.email }</Text>
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
  },
});
