import { decorate, observable } from "mobx";
import { instance } from "./instance";

class CakeStore {
  cakeshops = [];
  loading = true;
  fetchAllCakeShops = async () => {
    try {
      const res = await instance.get("?format=json");
      const cakeshops = res.data;
      this.cakeshops = cakeshops;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(CakeStore, {
  cakeshops: observable,
  loading: observable
});
const cakeStore = new CakeStore();
cakeStore.fetchAllCakeShops();
export default cakeStore;
