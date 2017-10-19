import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,
  DeviceEventEmitter
} from "react-native";

import { StackNavigator } from "react-navigation";
import VoxImplant from "react-native-voximplant";
import Spinner from "react-native-loading-spinner-overlay";

/*DeviceEventEmitter.addListener("ConnectionSuccessful", () => {
  console.log("Connection successful");
});

DeviceEventEmitter.addListener("LoginSuccessful", () => {
  console.log("Login successful ");
});

DeviceEventEmitter.addListener("LoginFailed", () => {
  console.log("Login failed");
});*/

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      loading: false
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  componentDidMount() {
    VoxImplant.SDK.connect();
  }

  async onRegisterPress() {
    this.setState({ loading: true });
    const { email, password, name } = this.state;
    console.log(email);
    console.log(name);
    console.log(password);

    //save input values
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("name", name);
    await AsyncStorage.setItem("password", password);

    //enter main account credentials
    const Vemail = "testing@testing.com";
    const Vpassword = "testing123";

    //fetch response from voximplantto get API key and Account ID
    const responseM = await fetch(
      "https://api.voximplant.com/platform_api/Logon/?account_email=" +
        Vemail +
        "&account_password=" +
        Vpassword
    );
    const jsonM = await responseM.json();
    const api_key = jsonM.api_key;
    const account_id = JSON.stringify(jsonM.account_id);
    await AsyncStorage.setItem("API", api_key);
    await AsyncStorage.setItem("ACC_ID", account_id);
    console.log(api_key);
    console.log(account_id);

    //fetch response from voximplant with account and app id  to get application id
    //use once only for single application or for different applications
   
    //for new app create
    /*
    const appname = "humdum";
    const responseA = await fetch(
      "https://api.voximplant.com/platform_api/AddApplication/?account_id=" +
        account_id +
        "&api_key=" +
        api_key +
        "&application_name="+appname
    );
    const jsonA = await responseA.json();
    const application_id = JSON.stringify(jsonA.application_id);
    await AsyncStorage.setItem("application_id", application_id);
    console.log("Application id:" + application_id);

    const usernameValue = email.replace(/@[^@]+$/, ""); // get username from email
    
    //fetch response from voximplant to get the create user & user id of the enter email and password
    const response = await fetch(
      "https://api.voximplant.com/platform_api/AddUser/?account_id=" +
        account_id +
        "&api_key=" +
        api_key +
        "&user_name=" +
        usernameValue +
        "&user_display_name=" +
        name +
        "&user_password=" +
        password
    );
    const json = await response.json();
    const user_id = JSON.stringify(json.user_id);
    await AsyncStorage.setItem("user_id", user_id);

    //get response from voximplant to add the user to application for calling within the app's users
    const responseB = await fetch(
      "https://api.voximplant.com/platform_api/BindUser/?account_id=" +
        account_id +
        "&api_key=" +
        api_key +
        "&user_id=" +
        user_id +
        "&application_id="+ application_id
    );
    const jsonB = await responseB.json();
    const result = JSON.stringify(jsonB.result);
    console.log(result);
*/

    //for assign user to ALL application
    const usernameValue = email.replace(/@[^@]+$/, "");
    const response = await fetch(
      "https://api.voximplant.com/platform_api/AddUser/?account_id=" +
        account_id +
        "&api_key=" +
        api_key +
        "&user_name=" +
        usernameValue +
        "&user_display_name=" +
        name +
        "&user_password=" +
        password
    );
    const json = await response.json();
    const user_id = JSON.stringify(json.user_id);
    await AsyncStorage.setItem("user_id", user_id);

    const responseB = await fetch(
      "https://api.voximplant.com/platform_api/BindUser/?account_id=" +
        account_id +
        "&api_key=" +
        api_key +
        "&user_id=" +
        user_id +
        "&application_id=all"
    );
    const jsonB = await responseB.json();
    const result = JSON.stringify(jsonB.result);
    console.log(result);
    
    const accnameValue = "testing";
    const appnameValue = "testing";
    const passwordValue = password;

    //login the user to get deviceeventemitter
    VoxImplant.SDK.login(
      usernameValue +
        "@" +
        appnameValue +
        "." +
        accnameValue +
        ".voximplant.com",
      passwordValue
    );

    this.setState({ loading: false });
    this.props.navigation.navigate("Boiler");
  }

  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("./banana.png")} />
          <Text style={styles.subtext}>Sign Up:</Text>
        </View>
        <KeyboardAvoidingView>
          <TextInput
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.emailInput.focus()}
          />
          <TextInput
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            ref={input => (this.emailInput = input)}
            onSubmitEditing={() => this.passwordCInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            ref={input => (this.passwordCInput = input)}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            secureTextEntry
          />
          <TextInput
            value={this.state.password}
            onChangeText={password_confirmation =>
              this.setState({ password_confirmation })}
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            ref={input => (this.passwordInput = input)}
          />
        </KeyboardAvoidingView>
        <TouchableHighlight
          onPress={this.onRegisterPress.bind(this)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
        <Spinner visible={this.state.loading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#16a085",
    padding: 20,
    paddingTop: 100
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
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  }
});

AppRegistry.registerComponent("Register", () => Register);
