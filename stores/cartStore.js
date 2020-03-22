import { computed, decorate, observable } from "mobx";
import { instance } from "./instance";

class CartStore {
  items = [];
  cart = [];
  loading = true;

  fetchCartData = async () => {
    try {
      const res = await instance.get("cart/");
      const cart = res.data;
      this.cart = cart;
      this.loading = false;
    } catch (err) {
      console.log("something went wrong fetching the cart data");
    }
  };

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
    //   this.items = this.items.filter(_item => _item !== item);
    // };
    const itemExist = this.items.find(
      _item => _item.drink === item.drink && _item.option === item.option
    );
    if (itemExist) {
      if (item.quantity <= 1) {
        this.items = this.items.filter(_item => _item != item);
      } else {
        itemExist.quantity -= 1;
      }
    }
  };

  checkoutCart = () => {
    this.items = [];
    alert("Thank you for shopping with us!");
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
