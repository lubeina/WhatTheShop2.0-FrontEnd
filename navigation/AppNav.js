import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile/Profile";
import Cart from "../components/CakeCart";
import Detail from "../components/CakeDetail";
import List from "../components/CakeList";
import OrderDetails from "../components/Profile/OrderDetails";

const AppNav = createStackNavigator(
  {
    Profile: Profile,
    Cart: Cart,
    List: List,
    Detail: Detail,
    OrderDetail: OrderDetails
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Sweet Spot"
    }
  }
);

export default AppNav;
