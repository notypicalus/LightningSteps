import { LightningElement, track } from "lwc";
import { throws } from "assert";

export default class LightningSteps extends LightningElement {
  @track
  title = "Lightning Steps Shoe Store";

  filterItems = [];

  checkedFilters = [];

  cartItems = [];

  itemsToPurchase = [];

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

  /* If one of checkboxs is taken, then push to the eventValue */

  checkboxChange(event) {
    let eventValue = event.target.value;
    let eventCheck = event.target.checked;
    if (eventCheck) {    /* If the checkbox is on, push the values to eventValue */
      this.checkedFilters.push(eventValue);
      // console.log(eventValue, 'checked')
    } else {
      this.checkedFilters = this.checkedFilters.filter(
        (filter) => filter != eventValue
        );
        // console.log(eventValue, 'unchecked');
    }
    this.setFilteredItems();       /* if the check box is checked and the checked item and item label is same? */
    console.log(this.setFilteredItems, 'whats inside here')
  }

  setFilteredItems() {
    //boot, checkbox
    this.filterItems = this.items.filter((item) =>  /* filterItems is an empty array. We pushed the checkedbox items to this array.*/
      this.checkedFilters.includes(item.label)      /* Now we check the checked checkbox and labels of array. */
    );
  }

  trimItemId(itemId) {
    return itemId.split("-")[0]; /* There was 12 after id. So deleted it. Didn't find the reason why there was 12 */
  }

    /* If you click add to cart button, then each item will be added to cart */

  addtoCartButtons(event) {
    let clickedItemId = this.trimItemId(event.target.id);
    console.log("<-id: " + clickedItemId);          /* findIndex() array method */
    let cartItemIndex = this.cartItems.findIndex(   /* We'll find the index of the items in the cart, array of [cartItems] */
      (item) => item.id === clickedItemId      /* Item in the cart and clickedItemid is same, find the index */
    );
    if (cartItemIndex === -1) {     /* Why -1 findIndex method */
      console.log(cartItemIndex, 'cartItemIndex and first item to the cart')
      const item = this.items.find((item) => item.id === clickedItemId);
      console.log(item, 'First item object')
      this.cartItems.push({ qty: 1, ...item });
    } else {
      this.cartItems[cartItemIndex] = {
        ...this.cartItems[cartItemIndex],
        qty: this.cartItems[cartItemIndex].qty + 1
      };
    } console.log(...this.cartItems, 'spread operator')
    this.filterItems = this.filterItems.filter(item => true);
    console.log(this.filterItems, 'filterItems')
  }

  removeFromCart(event) {
    let clickedItemId = this.trimItemId(event.target.id);
    // console.log(this.trimItemId, 'trimItemid')
    // console.log(clickedItemId, 'clickedItemid')
    this.cartItems = this.cartItems.filter((item) => item.id != clickedItemId);
  }

  purchaseButton(event) {
    let eventCheck = event.target.purchased;
    if (eventCheck = true) { 
      this.cartItems.push(this.itemsToPurchase);
      
      console.log(this.itemsToPurchase, 'purchase event')
    } 
    
    // else {
    //   this.checkedFilters = this.checkedFilters.filter(
    //     (filter) => filter != eventValue
    //     );
    //     // console.log(eventValue, 'unchecked');
    // }
    // let clickedItemId = this.trimItemId(event.target.id)
    // this.clickedItemId = this.cartItems.push((this.itemsToPurchase))
    // console.log(this.cartItems, 'cartItems'
    // this.cartItems = this.itemsToPurchase.filter((item) => item.id = clickedItemId);
    // this.itemsToPurchase.push(itemsPurchased);
    // this.itemsPurchased

  }
};