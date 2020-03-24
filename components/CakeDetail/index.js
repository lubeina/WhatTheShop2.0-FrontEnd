import React, { Component } from "react";

import NumericInput from "react-native-numeric-input";

// NativeBase Components
import { Alert, Image } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text,
  Spinner,
  Header
} from "native-base";

// Style
import styles from "./styles";

// Components;
import CartButton from "../Buttons/CartButton";

// Stores
import cakeStore from "../../stores/cakeStore";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class CakeDetail extends Component {
  state = {
    cake: this.props.navigation.getParam("cakeshopID"),
    quantity: 1
  };

  changeQuantity = value => this.setState({ quantity: value });

  handleAdd = () => {
    authStore.user
      ? cartStore.addItemToCart(
          this.state,
          this.props.navigation.getParam("cakeshopName"),
          this.props.navigation.getParam("cakeshopPrice")
        )
      : Alert.alert("Stop", "Do you wish to Login?", [
          {
            text: "Yes",
            onPress: () => this.props.navigation.navigate("Login")
          }
        ]);
  };

  render() {
    const cakeshopID = this.props.navigation.getParam("cakeshopID", 1);
    const cakeshop = cakeStore.cakeshops.find(
      cakeshop => cakeshopID === cakeshop.id
    );
    if (cakeStore.loading) return <Spinner />;
    return (
      <Container style={styles.authContainer}>
        <Content>
          <Card style={{ flex: 0, backgroundColor: "mistyrose" }}>
            <CardItem style={{ backgroundColor: "mistyrose" }}>
              <Left>
                <Thumbnail bordered source={{ uri: cakeshop.image }} />
                <Body style={{ backgroundColor: "mistyrose" }}>
                  <Text style={styles.text}>
                    {cakeshop.name + "\n"}
                    <Text style={styles.text}>{cakeshop.size + "\n"}</Text>
                    <Text note>{cakeshop.flavor}</Text>
                  </Text>
                </Body>
              </Left>
              <Body />
            </CardItem>
            <CardItem style={{ backgroundColor: "mistyrose" }}>
              <Body style={{ backgroundColor: "mistyrose" }}>
                <Image
                  source={{ uri: cakeshop.image }}
                  style={{ height: 300, width: 380, flex: 1 }}
                />
              </Body>
            </CardItem>
            <CardItem style={{ backgroundColor: "mistyrose" }}>
              <Left>
                <Body
                  style={
                    (styles.numericInput, { backgroundColor: "mistyrose" })
                  }
                >
                  <NumericInput
                    value={this.state.value}
                    onChange={this.changeQuantity}
                    initValue={1}
                    style={{ backgroundColor: "mistyrose" }}
                    rightButtonBackgroundColor="mistyrose"
                    leftButtonBackgroundColor="mistyrose"
                  />
                </Body>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text>Add</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CakeDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("cakeshopName"),
  headerRight: <CartButton />
});

export default CakeDetail;
