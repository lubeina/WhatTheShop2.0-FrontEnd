import React, { Component } from "react";
import styles from "./styles";

// NativeBase Components
import { Image, Text, View } from "react-native";
import { Button, Spinner } from "native-base";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { observer } from "mobx-react";
import LogoutButton from "../Buttons/LogoutButton";

class Profile extends Component {
  componentDidMount() {
    if (authStore.user) profileStore.fetchProfileData();
  }
  render() {
    if (profileStore.loading) return <Spinner />;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>
          {profileStore.profile.username}'s Profile
        </Text>
        <Text style={styles.profiletext}>
          Name: {profileStore.profile.first_name}{" "}
          {profileStore.profile.last_name}
        </Text>
        <Text style={styles.profiletext}>
          Email: {profileStore.profile.email}
        </Text>
        <LogoutButton />
      </View>
    );
  }
}
export default observer(Profile);
