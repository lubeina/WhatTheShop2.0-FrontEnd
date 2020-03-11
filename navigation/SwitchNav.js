import { createSwitchNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
import ProfileStack from "./ProfileNav";

const SwitchNav = createSwitchNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    App: ProfileStack
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Sweet Spot"
    }
  }
);

export default SwitchNav;
