import React, { Component } from "react";
import NumericInput from "react-native-numeric-input";

// NativeBase Components
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

// --------------------------------------------------------------
// store
import cakeStore from "../../Store/cakeStore";
// import cartStore from "../../Store/cartStore";

// ---------------------------------------------------------------
//List
// import coffeeshops from "../CoffeeList/list";

// ---------------------------------------------------------------
// component
// import CartButton from "../Buttons/CartButton";

// --------------------------------------------------------------------------------------------------------
class CakeDetail extends Component {
  state = {
    size: "",
    flavours: "",
    quantity: 1
  };

  //   changeSize = value =>
  //     this.setState({
  //       size: value
  //     });

  //   changeOption = value =>
  //     this.setState({
  //       option: value
  //     });

  // ------------ handel press ------------
  handelPress = () => cartStore.addItemToCart(this.state);

  render() {
    const cakeshopID = this.props.navigation.getParam("cakeshopID");
    const cakeshop = cakeStore.cakeshops.find(
      cakeshop => cakeshopID === cakeshop.id
    );
    return (
      <Container>
        <Content>
          <Card transparent style={styles.card}>
            {/* ----------------- card item -----------------------------  */}
            <CardItem>
              <Left>
                <Text style={styles.text}>
                  {cakeshop.name + "\n"}
                  <Text note>{cakeshop.price}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: cakeshop.image }} />
              </Right>
            </CardItem>
            {/* ----------------- card item -----------------------------  */}
            <CardItem>
              <Body>
                <Text style={styles.text}>Description</Text>
                <Text style={styles.text}>Size: {cakeshop.size}</Text>
                <Text style={styles.text}>Flavor:{cakeshop.flavour}</Text>
              </Body>
            </CardItem>
            {/* ----------------- card item -----------------------------  */}
            <CardItem>
              <Body style={styles.numericInput}>
                <NumericInput
                  value={this.state.value}
                  onChange={quantity => this.setState({ quantity })}
                  initValue={1}
                />
              </Body>

              <Right>
                <Button
                  full
                  style={styles.addButton}
                  onPress={this.handelPress}
                >
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
