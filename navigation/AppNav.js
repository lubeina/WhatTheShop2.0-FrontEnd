import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile/Profile";
import Cart from "../components/CakeCart";
import Detail from "../components/CakeDetail";
import List from "../components/CakeList";

const AppNav = createStackNavigator(
  {
    Profile: Profile,
    Cart: Cart,
    List: List,
    Detail: Detail
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Sweet Spot"
    }
  }
);

export default AppNav;
