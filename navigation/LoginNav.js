import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";

const LoginNav = createStackNavigator(
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
export default LoginNav;
