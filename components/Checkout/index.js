import React, { Component } from "react";

// NativeBase Components
import {
  Content,
  List,
  Text,
  Left,
  Right,
  Body,
  Container,
  Card,
  CardItem,
  Button
} from "native-base";

import cartStore from "../../stores/cartStore";
import CheckoutItem from "./CheckoutItem";

class Checkout extends Component {
  render() {
    if (cartStore.loading) return <Spinner />;
    const checkoutList = cartStore.checkout_items.map(checkout_item => (
      <CheckoutItem item={checkout_item} key={checkout_item.id} />
    ));
    return (
      <Container>
        <Content>
          <Card>
            {checkoutList}
            <Right>
              <Text>Total Amount : KD {cartStore.price}.000 </Text>
            </Right>
            <Button dark onPress={() => this.props.navigation.navigate("List")}>
              <Text>Thank you for shopping with us!</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    );
  }
}

Checkout.navigationOptions = {
  title: "Checkout"
};

export default Checkout;
