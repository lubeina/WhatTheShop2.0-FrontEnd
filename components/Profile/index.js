import React from "react";
import styles from "./styles";

// NativeBase Components
import { Image, Text, View, TouchableOpacity } from "react-native";
import authStore from "../../stores/authStore";
import LogoutButton from "../Buttons/LogoutButton";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";

const Profile = () => {
  // console.log(authStore.userData);
  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>{authStore.user.username}'s Profile</Text>
      <Text> Username: {authStore.user.username}</Text>
      <Text>
        Name: {authStore.user.first_name} {authStore.user.last_name}
      </Text>
      <Text> Email: {authStore.user.email}</Text>
      <LogoutButton onPress={() => this.props.navigation.navigate("List")} />
    </View>
  );
};
export default withNavigation(observer(Profile));
