import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CakeItem = ({ cakeshop, navigation }) => {
  const handlePress = () =>
    navigation.navigate("Detail", {
      cakeshopID: cakeshop.id,
      cakeshopName: cakeshop.name,
      cakeshopPrice: cakeshop.price
    });

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
                {cakeshop.price}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(CakeItem);
