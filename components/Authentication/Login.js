import React, { Component } from "react";
import { observer } from "mobx-react";
import styles from "./styles";

// NativeBase Components
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handlePress = () => {
    authStore.login(this.state, this.props.navigation);
  };

  render() {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={value => this.setState({ username: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          onChangeText={value => this.setState({ password: value })}
        />
        <TouchableOpacity style={styles.authButton} onPress={this.handlePress}>
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          Register here!
        </Text>
      </View>
    );
  }
}
export default observer(Login);
