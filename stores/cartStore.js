import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];

  addItemToCart = item => {
    const itemExist = this.items.find(_item => _item.cake === item.cake);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
    instance.post("cart/item/", item);
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
