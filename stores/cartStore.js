import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];

  addItemToCart = async (item, name) => {
    const itemExist = this.items.find(_item => _item.cake === name);
    if (itemExist) {
      itemExist.quantity += item.quantity;
      itemExist.item_price += item.item_price;
    } else {
      const res = await instance.post("cart/item/", item);
      this.items.push(res.data);
    }
  };

  removeItemFromCart = item => {
    this.items = this.items.filter(_item => _item !== item);
  };

  checkoutCart = () => {
    this.items = [];
    alert("I'm a cute message");
  };

  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity += item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  quantity: computed
});

const cartStore = new CartStore();
export default cartStore;
