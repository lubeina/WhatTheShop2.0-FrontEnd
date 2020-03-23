import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];
  loading = true;

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
        console.log("something went wrong");
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
      console.log("something went wrong");
    }
    this.items = this.items.filter(_item => _item !== item);
  };

  checkoutCart = () => {
    this.items = [];
    alert("Thank you for Shopping with us!");
  };

  get quantity() {
    let quantity = 0;
    this.items.forEach(item => (quantity += item.quantity));
    return quantity;
  }
}

decorate(CartStore, {
  items: observable,
  cart: observable,
  loading: observable,
  quantity: computed
});

const cartStore = new CartStore();
cartStore.fetchCartData();
export default cartStore;
