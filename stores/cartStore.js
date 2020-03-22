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

  addItemToCart = item => {
    const itemExist = this.items.find(_item => _item.cake === item.cake);
    if (itemExist) itemExist.quantity += item.quantity;
    else this.items.push(item);
    instance.post("cart/item/", item);
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
