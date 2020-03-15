import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../components/Authentication/Login";
import RegisterScreen from "../components/Authentication/Register";

const AuthNav = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Sweet Spot"
    }
  }
);
export default AuthNav;
