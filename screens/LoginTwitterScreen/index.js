import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { firebase } from "@react-native-firebase/auth";

export default class LoginTwitterScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
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
