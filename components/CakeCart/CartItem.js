import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

// Style
import cartStore from "../../stores/cartStore";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Left>
        <Text>
          {" "}
          {item.cake} - {item.quantity}{" "}
        </Text>
      </Left>
      <Body>
        <Text>{item.item_price} KD</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => cartStore.removeItemFromCart(item)}>
          <Icon name="trash" />
        </Button>
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
