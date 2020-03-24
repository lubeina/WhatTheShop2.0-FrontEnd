import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button, Spinner, Container, View } from "native-base";

// Component
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";
import { render } from "react-dom";
import styles from "./styles";

class CakeCart extends Component {
  render() {
    if (cartStore.loading) return <Spinner />;
    cartItems = cartStore.items.map(item => (
      <CartItem item={item} key={item.id} />
    ));
    return (
      <Container style={styles.authContainer}>
        <List>
          {cartItems}
          <Button
            style={styles.authButton}
            onPress={() => cartStore.checkoutCart(this.props.navigation)}
          >
            <Text style={styles.authButtonText}>Checkout</Text>
          </Button>
        </List>
      </Container>
    );
  }
}

CakeCart.navigationOptions = {
  title: "Cart"
};

export default observer(CakeCart);
