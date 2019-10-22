import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from "react-native-fbsdk";

export default class LoginFacebookScreen extends Component {
  async componentDidMount () {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString()
          )
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error)
            } else if (result.isCancelled) {
              console.log('login is cancelled.')
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString())
              })
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})