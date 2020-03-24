import React, { Component } from "react";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import { Spinner } from "native-base";
import styles from "./styles";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  handlePress = () => {
    authStore.register(this.state, this.props.navigation);
  };

  render() {
    if (authStore.loading) return <Spinner />;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          onChangeText={value => this.setState({ username: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="First name"
          placeholderTextColor="#A6AEC1"
          onChangeText={value => this.setState({ first_name: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Last name"
          placeholderTextColor="#A6AEC1"
          onChangeText={value => this.setState({ last_name: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Email"
          placeholderTextColor="#A6AEC1"
          onChangeText={value => this.setState({ email: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          onChangeText={value => this.setState({ password: value })}
        />
        <TouchableOpacity style={styles.authButton} onPress={this.handlePress}>
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}

Register.navigationOptions = {
  title: "Register"
};

export default observer(Register);
