import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const ProfileButton = ({ navigation }) => {
  const handleProfile = () => navigation.navigate("Profile");

  const handleSignup = () => navigation.navigate("Register");
  return authStore.user ? (
    <Button transparent>
      <Icon
        name="user"
        type="AntDesign"
        style={{ color: "maroon" }}
        onPress={handleProfile}
      />
    </Button>
  ) : (
    <Button transparent>
      <Icon
        name="adduser"
        type="AntDesign"
        style={{ color: "maroon" }}
        onPress={handleSignup}
      />
    </Button>
  );
};

export default withNavigation(observer(ProfileButton));
