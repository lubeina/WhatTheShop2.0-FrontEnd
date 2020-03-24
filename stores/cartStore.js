import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];
  loading = true;
  checkout_items = [];

  fetchAllCartItems = async () => {
    try {
      const res = await instance.get("cart/");
      const cart_item = res.data.cart_item;
      this.items = cart_item;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  addItemToCart = async (item, name, price) => {
    const itemExist = this.items.find(_item => _item.cake === name);
    if (itemExist) {
      itemExist.quantity += item.quantity;
      try {
        await instance.put(`cart/${itemExist.id}/update/`, {
          quantity: itemExist.quantity
        });
      } catch (err) {
        console.log("something went wrong while adding item in cart");
      }
      itemExist.item_price = itemExist.quantity * price;
    } else {
      const res = await instance.post("cart/item/", item);
      this.items.push(res.data);
    }
  };

  removeItemFromCart = async item => {
    try {
      await instance.delete(`cart/${item.id}/delete/`);
    } catch (err) {
      console.log("something went wrong while removing from cart");
    }
    this.items = this.items.filter(_item => _item !== item);
  };

  checkoutCart = async navigation => {
    this.loading = true;
    this.items = [];
    this.checkout_items = [];
    try {
      const res = await instance.get("checkout/");
      const checkout_item = res.data.cart_item;
      this.checkout_items = checkout_item;
      this.loading = false;
    } catch (err) {
      console.log("something went wrong while checkout");
    }
    navigation.navigate("Checkout");
  };

  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity += item.quantity));
    return quantity;
  }

  get price() {
    let price = 0;
    this.checkout_items.forEach(item => (price += item.item_price));
    return price;
  }
}

decorate(CartStore, {
  items: observable,
  cart: observable,
  loading: observable,
  checkout_items: observable,
  quantity: computed,
  price: computed
});

const cartStore = new CartStore();
export default cartStore;
