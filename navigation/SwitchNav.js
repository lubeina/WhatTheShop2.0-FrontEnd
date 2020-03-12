import { createSwitchNavigator } from "react-navigation";

import LoginStack from "./LoginNav";
import ProfileStack from "./ProfileNav";

const SwitchNav = createSwitchNavigator(
  {
    LoginNav: LoginStack,
    ProfileStack: ProfileStack
  },
  {
    initialRouteName: "LoginNav",
    defaultNavigationOptions: {
      title: "Sweet Spot"
    }
  }
);

export default SwitchNav;
