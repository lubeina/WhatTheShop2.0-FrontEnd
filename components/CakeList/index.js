import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Stores
import cakeStore from "../../stores/cakeStore";
import authStore from "../../stores/authStore";

// Component
import CakeItem from "./CakeItem";
// import CartButton from "../Buttons/CartButton";
// import LogoutButton from "../Buttons/LogoutButton";

const CakeList = () => {
  if (cakeStore.loading) return <Spinner />;
  const cakeshopList = cakeStore.cakeshops.map(cakeshop => (
    <CakeItem cakeshop={cakeshop} key={cakeshop.id} />
  ));
  return (
    <Content>
      <List>{cakeshopList}</List>
      {/* {authStore.user}
      && <LogoutButton /> */}
    </Content>
  );
};

CakeList.navigationOptions = {
  title: "Cake List"
  // headerRight: <CartButton />
};

export default observer(CakeList);
