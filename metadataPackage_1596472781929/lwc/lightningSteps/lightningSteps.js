import { LightningElement, track } from "lwc";

export default class LightningSteps extends LightningElement {
  @track
  title = "Lightning Steps Shoe Store";

  filterItems = [];

  checkedFilters = [];

  cartItems = [];

  items = [
    {
      id: "shoes1",
      name: "Chelsea",
      label: "boot",
      price: "€20,99"
    },
    {
      id: "shoes2",
      name: "Nike AirZoom Pegasus 37",
      label: "running shoes",
      price: "€19,99"
    },
    {
      id: "shoes3",
      name: "Salt Water Sandals",
      label: "sandals",
      price: "€30,99"
    }
  ];

  /* If one of checkboxs is taken, then match with Filter function */

  checkboxChange(event) {
    let eventValue = event.target.value;
    let eventCheck = event.target.checked;
    if (eventCheck) {
      this.checkedFilters.push(eventValue);
    } else {
      this.checkedFilters = this.checkedFilters.filter(
        (filter) => filter != eventValue
      );
    }
    this.setFilteredItems();
  }

  setFilteredItems() {
    //boot, checkbox
    this.filterItems = this.items.filter((item) =>
      this.checkedFilters.includes(item.label)
    );
  }

  /* If you click add to cart button, then each item will be added to cart */

  trimItemId(itemId) {
    return itemId.split("-")[0];
  }

  addtoCartButtons(event) {
    let clickedItemId = this.trimItemId(event.target.id);
    console.log("<-id: " + clickedItemId);
    let cartItemIndex = this.cartItems.findIndex(
      (item) => item.id === clickedItemId
    );
    if (cartItemIndex === -1) {
      const item = this.items.find((item) => item.id === clickedItemId);
      this.cartItems.push({ qty: 1, ...item });
    } else {
      this.cartItems[cartItemIndex] = {
        ...this.cartItems[cartItemIndex],
        qty: this.cartItems[cartItemIndex].qty + 1
      };
    }
    this.filterItems = this.filterItems.filter(item => true);
  }

  removeFromCart(event) {
    let clickedItemId = this.trimItemId(event.target.id);
    this.cartItems = this.cartItems.filter((item) => item.id != clickedItemId);
  }

  // updateCartTotal () {

  //     let cartItemContainer = this.querySelector('cart-items');
  //     let cartRows = cartItemContainer.querySelector('cart-row');

  //     items.forEach(function (item, index) {
  //         const cartRows = cartRows[i];
  //     });

  // }

  // removeItemsButtons (items, itemNew) {
  //     const index = this.items.findIndex(function(item){
  //         return this.item.text.toLowerCase() === itemNew.toLowerCase()
  //     })

  //     if (index > -1) {
  //         this.items.splice(index, 1)
  //     }
  // }

  // purchaseClicked() {

  // }
}
