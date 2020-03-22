import { decorate, observable } from "mobx";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;
  loading = true;

  setUser = async token => {
    if (token) {
      // Save token to localStorage
      await AsyncStorage.setItem("myToken", token);
      // Set token to Auth header
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      // Set current user
      this.user = jwt_decode(token);
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  register = async (userData, navigation) => {
    try {
      await instance.post("api/register/", userData);
      await this.login(userData);
      navigation.navigate("List");
    } catch (err) {
      console.log("something went wrong", userData);
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("api/login/", userData);
      const user = res.data;
      await this.setUser(user.access);
      navigation.navigate("List");
    } catch (err) {
      console.log("something went wrong logging in", userData);
    }
  };

  logout = async navigation => {
    await this.setUser();
    navigation.navigate("List");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentTime = Date.now() / 1000;
      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        await this.setUser(token);
      } else {
        await this.setUser();
      }
    }
    this.loading = false;
  };
}

decorate(AuthStore, {
  user: observable,
  loading: observable
});

const authStore = new AuthStore();
export default authStore;
