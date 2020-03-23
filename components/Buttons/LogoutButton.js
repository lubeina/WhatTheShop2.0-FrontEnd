import React from "react";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

const LogoutButton = ({ navigation }) => {
  return (
    <Button danger onPress={() => authStore.logout(navigation)}>
      <Text>Logout</Text>
    </Button>
  );
};

export default withNavigation(observer(LogoutButton));
