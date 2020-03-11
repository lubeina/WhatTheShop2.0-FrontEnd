import { createStackNavigator } from "react-navigation-stack";

// Components
import CartScreen from "../components/CakeCart";
import DetailScreen from "../components/CakeDetail";
import ListScreen from "../components/CakeList";

const ProfileStack = createStackNavigator(
  {
    Cart: CartScreen,
    List: ListScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
