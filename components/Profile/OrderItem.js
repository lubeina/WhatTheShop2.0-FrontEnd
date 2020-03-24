import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";
import styles from "./styles";

const OrderItem = ({ item }) => {
  return (
    <Card>
      <CardItem>
        <Text style={styles.profiletext}>Cake: {item.cake}</Text>
      </CardItem>
      <CardItem>
        <Text style={styles.profiletext}>Quantity: {item.quantity}</Text>
      </CardItem>
      <CardItem>
        <Text style={styles.profiletext}>Price: KD {item.item_price}.000</Text>
      </CardItem>
    </Card>
  );
};
export default OrderItem;
