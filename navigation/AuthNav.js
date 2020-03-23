import { createStackNavigator } from "react-navigation-stack";

import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

const AuthNav = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Sweet Spot"
    }
  }
);
export default AuthNav;
