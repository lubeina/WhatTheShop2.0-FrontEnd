import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";
import styles from "./styles";

const CheckoutItem = ({ item }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.card}>
        <Text style={styles.text}>Cake: {item.cake}</Text>
      </CardItem>
      <CardItem style={styles.card}>
        <Text style={styles.text}>Quantity: {item.quantity}</Text>
      </CardItem>
      <CardItem style={styles.card}>
        <Text style={styles.text}>Price: KD {item.item_price}.000</Text>
      </CardItem>
    </Card>
  );
};
export default CheckoutItem;
