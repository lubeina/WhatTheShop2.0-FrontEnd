import React, { Component } from "react";

import NumericInput from "react-native-numeric-input";

// NativeBase Components
import { Alert } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Thumbnail,
  Left,
  Picker,
  Right,
  Text
} from "native-base";

// Style
import styles from "./styles";

// Components;
import CartButton from "../Buttons/CartButton";

// Stores
import cakeStore from "../../stores/cakeStore";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

class CakeDetail extends Component {
  state = {
    quantity: 1
  };

  changeQuantity = value => this.setState({ quantity: value });

  // handleAdd = () => {
  //   authStore.user
  //     ? cartStore.addItemToCart(this.state)
  //     : Alert.alert("Stop", "Do you wish to Login?", [
  //         {
  //           text: "Yes",
  //           onPress: () => this.props.navigation.navigate("Login")
  //         }
  //       ]);
  // };

  render() {
    const cakeshopID = this.props.navigation.getParam("cakeshopID", 1);
    const cakeshop = cakeStore.cakeshops.find(
      cakeshop => cakeshopID === cakeshop.id
    );

    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            {/* ----------------------  cake name ------------------------  */}
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {cakeshop.name + "\n"}
                  <Text note>{cakeshop.flavor}</Text>
                </Text>
              </Left>
              <Body />
              {/* ----------------- image cake ------------------------  */}
              <Right>
                <Thumbnail bordered source={{ uri: cakeshop.image }} />
              </Right>
            </CardItem>
            {/* ----------------- size cake ----------------------------------- */}
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {cakeshop.size + "\n"}
                </Text>
              </Left>
              <Body />
            {/* ---------------- change quantity --------------------------- */}
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={this.changeQuantity}
                  initValue={1}
                />
              </Body>
              {/* ------------------- ADD Button --------------------------- */}
              <Right>
                <Button full style={styles.addButton} onPress={this.handleAdd}>
                  <Text>Add</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

CakeDetail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("cakeshopName"),
  headerRight: <CartButton />
});

export default CakeDetail;
