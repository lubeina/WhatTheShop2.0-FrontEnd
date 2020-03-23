import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import styles from "./styles";

//Store
import cartStore from "../../stores/cartStore";
import { observer } from "mobx-react";

const CartItem = ({ item }) => {
  return (
    <ListItem style={styles.listStyle}>
      <Left>
        <Text style={styles.cake}>
          {" "}
          {item.cake} - {item.quantity}{" "}
        </Text>
      </Left>
      <Body>
        <Text style={styles.quantity}>KD {item.item_price}.000</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" style={styles.removeItem} />
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
