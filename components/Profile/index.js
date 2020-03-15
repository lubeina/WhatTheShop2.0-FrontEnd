import React from "react";
import styles from "./styles";

// NativeBase Components
import { Image, Text, View } from "react-native";
import { Button } from "native-base";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>{authStore.user.username}'s Profile</Text>
      <Text> Username: {authStore.user.username}</Text>
      <Text>
        Name: {authStore.user.first_name} {authStore.user.last_name}
      </Text>
      <Text> Email: {authStore.user.email}</Text>
      <Button danger onPress={() => authStore.logout(navigation)}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
};
export default observer(Profile);
