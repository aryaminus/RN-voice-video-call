import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    }
  };

  onForgetPress() {
        this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onForgetPress.bind(this)}
        >
          <Text style={styles.buttonText}>Forget Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    backgroundColor: "#16a085",
    padding: 20,
    paddingTop: 100
  },
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
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
});
