import { createStackNavigator } from "react-navigation-stack";

// Components
import ProfileScreen from "../components/Profile";
import CartScreen from "../components/CakeCart";
import DetailScreen from "../components/CakeDetail";
import ListScreen from "../components/CakeList";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
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
