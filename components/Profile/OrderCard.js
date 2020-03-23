import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";
import { withNavigation } from "react-navigation";

const OrderCard = ({ past_item, navigation }) => {
  const handleDetail = () =>
    navigation.navigate("OrderDetail", { id: past_item.id });
  return (
    <Card>
      <CardItem header button onPress={handleDetail}>
        <Text>Date: {past_item.date}</Text>
      </CardItem>
    </Card>
  );
};

export default withNavigation(OrderCard);
