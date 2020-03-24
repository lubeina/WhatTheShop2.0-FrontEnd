import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";

const CheckoutItem = ({ item }) => {
  return (
    <Card>
      <CardItem>
        <Text>Cake: {item.cake}</Text>
      </CardItem>
      <CardItem>
        <Text>Quantity: {item.quantity}</Text>
      </CardItem>
      <CardItem>
        <Text>Price: KD {item.item_price}.000</Text>
      </CardItem>
    </Card>
  );
};
export default CheckoutItem;
