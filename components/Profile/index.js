import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";
import authStore from "../../stores/authStore";

const Profile = () => {
  return (
    <Card>
      <CardItem>
        <Button danger onPress={authStore.logout}>
          <Text>Logout {authStore.user.username}</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default Profile;
