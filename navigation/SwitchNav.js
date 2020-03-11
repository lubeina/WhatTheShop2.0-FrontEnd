import { createSwitchNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import ProfileStack from "./ProfileNav";

const SwitchNav = createSwitchNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    App: ProfileStack
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Sweet Spot Login"
    }
  }
);

export default SwitchNav;
