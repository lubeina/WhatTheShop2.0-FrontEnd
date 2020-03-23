import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, Spinner } from "native-base";

// Component
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { render } from "react-dom";

class CakeCart extends Component {
  render() {
    if (cartStore.loading) return <Spinner />;
    cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={item.id} />
    ));
    return (
      <List>
        {cartItems}
        <Button full danger onPress={cartStore.checkoutCart}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

CakeCart.navigationOptions = {
  title: "Cart"
};

export default observer(CakeCart);
