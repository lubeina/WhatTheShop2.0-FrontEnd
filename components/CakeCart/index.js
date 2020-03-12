import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/cartStore";

const CakeCart = () => {
  const cartItems = cartStore.items.map(item => (
    <CartItem item={item} key={`${item.name} ${item.quantity}`} />
  ));

  return (
    <List>
      {cartItems}
      <Button full danger onPress={cartStore.checkoutCart}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

CakeCart.navigationOptions = {
  title: "Cart"
};

export default observer(CakeCart);
