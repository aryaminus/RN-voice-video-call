/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AsyncStorage,
  DeviceEventEmitter
} from "react-native";

import Login from "./app/components/Login";
import Boiler from "./app/components/Boiler";
import ForgetPassword from "./app/components/ForgetPassword";
import Register from "./app/components/Register";

import { StackNavigator } from "react-navigation";
import VoxImplant from "react-native-voximplant";

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

DeviceEventEmitter.addListener("ConnectionSuccessful", () => {
  console.log("Connection successful");
  this.setState({ page: "login" });
});

DeviceEventEmitter.addListener("LoginSuccessful", () => {
  console.log("Login successful ");
});

DeviceEventEmitter.addListener("LoginFailed", () => {
  console.log("Login failed");
});

class Home extends Component<{}> {
  constructor() {
    super();
    VoxImplant.SDK.closeConnection();
    this.state = {
      loading: true,
      emailA: ""
    };
  }

  componentDidMount() {
    VoxImplant.SDK.connect();
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  async checkuser() {
    const emailB = await AsyncStorage.getItem("email");
    this.setState({ emailA: emailB });
  }

  async VoxImplant() {
    const accnameValue = "testing";
    const appnameValue = "testing";
    const email = await AsyncStorage.getItem("email");
    const usernameValue = email.replace(/@[^@]+$/, "");
    const passwordValue = await AsyncStorage.getItem("password");
    console.log(email);
    console.log(passwordValue);
    VoxImplant.SDK.login(
      usernameValue +
        "@" +
        appnameValue +
        "." +
        accnameValue +
        ".voximplant.com",
      passwordValue
    );
    console.log("SDK Login done");
  }

  render() {
    this.checkuser();
    if (this.state.emailA === "") {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#16a085" />
          <Login navigation={this.props.navigation} />
        </View>
      );
    }
    this.VoxImplant();
    return <Boiler navigation={this.props.navigation} />;
  }
}

export default (App = StackNavigator({
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
}));

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
