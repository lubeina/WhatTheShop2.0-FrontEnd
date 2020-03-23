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
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { observer } from "mobx-react";
import LogoutButton from "../Buttons/LogoutButton";
import OrderCard from "./OrderCard";

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
      <Container>
        <Header transparent>
          <Text>{profileStore.profile.username}'s Profile</Text>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Text>
                Name: {profileStore.profile.first_name}{" "}
                {profileStore.profile.last_name}
              </Text>
            </CardItem>
            <CardItem>
              <Text>Email: {profileStore.profile.email}</Text>
            </CardItem>
          </Card>
        </Content>
        <Header transparent>
          <Text>Order History</Text>
        </Header>
        <Content>{orders}</Content>
        <LogoutButton />
      </Container>
    );
  }
}
export default observer(Profile);
