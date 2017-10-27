import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View, // Container component
  DeviceEventEmitter
} from "react-native";

import { StackNavigator } from "react-navigation";
import Spinner from "react-native-loading-spinner-overlay";
import VoxImplant from "react-native-voximplant";

/*DeviceEventEmitter.addListener("ConnectionSuccessful", () => {
  console.log("Connection successful");
});

DeviceEventEmitter.addListener("LoginSuccessful", () => {
  console.log("Login successful ");
});

DeviceEventEmitter.addListener("LoginFailed", () => {
  console.log("Login failed");
});*/

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };

  componentDidMount() {
    VoxImplant.SDK.connect();
  }

  async onLoginPress() {
    this.setState({loading: true });
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    const accnameValue = "testing";
    const appnameValue = "testing";
    const usernameValue = email.replace(/@[^@]+$/, ""); //extract username from email
    console.log(usernameValue);
    const passwordValue = password;

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
    this.setState({loading: false });
    this.props.navigation.navigate("Boiler");
  }
  render() {
    return (
      <View style={styles.container}>
        <View behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("./banana.png")} />
            <Text style={styles.subtext}>Humdum</Text>
          </View>
          <KeyboardAvoidingView style={styles.keyboard}>
            <TextInput
              placeholder="Username"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="go"
              secureTextEntry
              ref={input => (this.passwordInput = input)}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onLoginPress.bind(this)}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Register")}
            title="Sign up"
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("ForgetPassword")}
            title="Forget Password"
          >
            Forget Password
          </Text>
        </TouchableOpacity>
        <Spinner visible={this.state.loading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#16a085"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  subtext: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8
  },
  keyboard:{
    margin: 20,
    padding: 20,
    alignSelf: "stretch"
  },
  buttonContainer: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  button: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  }
});

AppRegistry.registerComponent("Login", () => Login);
