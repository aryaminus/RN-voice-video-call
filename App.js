/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from "./app/components/Login";
import Boiler from "./app/components/Boiler";
import ForgetPassword from "./app/components/ForgetPassword";
import Register from "./app/components/Register";

import { StackNavigator } from "react-navigation";

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#16a085" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: "ForgetPassword"
    }
  },
  Boiler: {
    screen: Boiler,
    navigationOptions: {
      title: "Boiler"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});