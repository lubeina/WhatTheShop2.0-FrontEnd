import React, { Component } from "react";

// NativeBase Components
import {
  Spinner,
  CardItem,
  Container,
  Text,
  Header,
  Card,
  Content
} from "native-base";
import { Image } from "react-native";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { observer } from "mobx-react";
import LogoutButton from "../Buttons/LogoutButton";
import OrderCard from "./OrderCard";
import styles from "./styles";

class Profile extends Component {
  componentDidMount() {
    if (authStore.user) profileStore.fetchProfileData();
  }
  render() {
    if (profileStore.loading) return <Spinner />;
    const orders = profileStore.profile.past_items
      .map(past_item => <OrderCard past_item={past_item} key={past_item.id} />)
      .reverse();
    return (
      <Container style={styles.authContainer}>
        <Content>
          <Header transparent>
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../../assets/the_sweet_shop_2.png")}
            ></Image>
          </Header>
        </Content>
        <Text style={styles.username}>
          {profileStore.profile.username}'s Profile
        </Text>
        <Card>
          <CardItem>
            <Text style={styles.subusername}>
              Name: {profileStore.profile.first_name}{" "}
              {profileStore.profile.last_name}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.subusername}>
              Email: {profileStore.profile.email}
            </Text>
          </CardItem>
        </Card>
        <Content>
          <Header transparent>
            <Text style={styles.username}>Order History</Text>
          </Header>
          {orders}
        </Content>
        <LogoutButton />
      </Container>
    );
  }
}
export default observer(Profile);
