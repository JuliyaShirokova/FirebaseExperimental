import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk'

export default class LoginFacebookScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userInfo: {},
      userFirebase: {}
    }
  }

  async componentDidMount () {
    LoginManager.logInWithPermissions(['public_profile'])
      .then(result => {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString()
          )
        }
      },
      error => {
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
              AccessToken.getCurrentAccessToken()
                .then(userInfo => {
                  console.log('user in Facebook', userInfo)
                  this.setState({ userInfo })

                  const credential = firebase.auth.FacebookAuthProvider.credential(
                    userInfo.accessToken
                  )
                  firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(user => {
                      console.log('user firebase ', user)
                      this.setState({ userFirebase: user })
                    })
                })
                .catch(err => {
                  console.log('error get token', err)
                })
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
        <View style={styles.userInfoContainer}>
          <Text>
            Current user email -
            {this.state.userFirebase.user && this.state.userFirebase.user.email}
          </Text>
        </View>
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
