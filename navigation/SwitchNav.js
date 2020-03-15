import { createSwitchNavigator } from "react-navigation";

import AuthStack from "./AuthNav";
import AppStack from "./AppNav";

const SwitchNav = createSwitchNavigator(
  {
    AuthNav: AuthStack,
    AppNav: AppStack
  },
  {
    initialRouteName: "AuthNav",
    defaultNavigationOptions: {
      title: "Sweet Spot"
    }
  }
);

export default SwitchNav;
