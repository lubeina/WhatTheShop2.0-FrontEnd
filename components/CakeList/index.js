import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container } from "native-base";

// Stores
import cakeStore from "../../stores/cakeStore";
import authStore from "../../stores/authStore";

// Component
import CakeItem from "./CakeItem";
import CartButton from "../Buttons/CartButton";
import LogoutButton from "../Buttons/LogoutButton";
import ProfileButton from "../Buttons/ProfileButton";
import styles from "./styles";

const CakeList = () => {
  if (cakeStore.loading) return <Spinner />;
  const cakeshopList = cakeStore.cakeshops.map(cakeshop => (
    <CakeItem cakeshop={cakeshop} key={cakeshop.id} />
  ));
  return (
    <Content style={styles.authContainer}>
      <List>{cakeshopList}</List>
    </Content>
  );
};

CakeList.navigationOptions = {
  title: "Cake List",
  headerRight: <CartButton />,
  headerLeft: <ProfileButton />
};

export default observer(CakeList);
