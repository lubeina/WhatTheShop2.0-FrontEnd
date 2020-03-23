import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";

const OrderItem = ({ item }) => {
  const total = item.quantity * item.item_price;
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
      <CardItem>
        <Text>Total: KD {total}.000</Text>
      </CardItem>
    </Card>
  );
};
export default OrderItem;
