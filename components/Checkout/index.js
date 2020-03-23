import React, { Component } from "react";

import NumericInput from "react-native-numeric-input";

// NativeBase Components
import { Alert } from "react-native";
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
  Text
} from "native-base";

// Style
import styles from "./styles";

// Components;
import CartButton from "../Buttons/CartButton";

// Stores
import cakeStore from "../../stores/cakeStore";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

// Credit Card
import {
  CreditCardInput,
  LiteCreditCardInput
} from "react-native-credit-card-input";

class CakeDetail extends Component {
  state = {
    quantity: 1
  };

  changeQuantity = value => this.setState({ quantity: value });

  handleAdd = () => {
    authStore.user
      ? cartStore.addItemToCart(this.state)
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

    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            {/* ----------------------  Checkout heddar------------------------  */}
            <CardItem>
              <Left>
                <Text style={styles.text}>Checkout </Text>
              </Left>
              <Body />
            </CardItem>

            {/* ---------------- Cash Button  --------------------------- */}
            <CardItem>
              <Left>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text style={styles.text}>Cash Payment{"\n"}</Text>
                </Button>
              </Left>
            </CardItem>

            {/* ----------------- Credit Card Button ----------------------------------- */}
            <CardItem>
              <Left>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text style={styles.text}>Credit Card Payment {"\n"}</Text>
                </Button>
              </Left>
              <Body />
            </CardItem>

            {/* ----------------- Paypal Button  ----------------------------------- */}
            <CardItem>
              <Left>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text style={styles.text}>Paypal Payment{"\n"}</Text>
                </Button>
              </Left>
              <Body />
            </CardItem>

            {/* ------------------------------------------------------------- */}
          </Card>
        </Content>
      </Container>
    );
  }
}

Checkout.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("cakeshopName"),
  headerRight: <CartButton />
});

export default Checkout;
