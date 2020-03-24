import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

// Style
import styles from "./styles";

// Stores
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";

const CakeItem = ({ cakeshop, navigation }) => {
  const state = {
    cake: cakeshop.id,
    quantity: 1
  };
  const handlePress = () =>
    navigation.navigate("Detail", {
      cakeshopID: cakeshop.id,
      cakeshopName: cakeshop.name,
      cakeshopPrice: cakeshop.price
    });

  const handleAdd = () => {
    authStore.user
      ? cartStore.addItemToCart(state, cakeshop.name, cakeshop.price)
      : Alert.alert("Stop", "Do you wish to Login?", [
          {
            text: "Yes",
            onPress: () => navigation.navigate("Login")
          }
        ]);
  };

  return (
    <ImageBackground source={{ uri: cakeshop.image }} style={styles.background}>
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: cakeshop.image }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{cakeshop.name}</Text>
              <Text note style={styles.text}>
                KD {cakeshop.price}
              </Text>
            </Left>
            <Right>
              <Button onPress={handleAdd} style={styles.authButton}>
                <Icon
                  name="add-shopping-cart"
                  type="MaterialIcons"
                  style={{ color: "white" }}
                />
              </Button>
            </Right>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(CakeItem);
