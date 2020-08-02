import { LightningElement, track} from 'lwc';

export default class LightningSteps extends LightningElement {

    @track
    title = 'Lightning Steps Shoe Store';
    
    filterItems = [];

    checkedFilters = [];

    items = [
        {
            id: 'shoes1',
            name: 'Chelsea',
            label: 'boot',
            price: '€20,99',
        },
        {
            id: 'shoes2',
            name: 'Nike AirZoom Pegasus 37',
            label: 'running shoes',
            price: '€19,99'
        },
        {
            id: 'shoes3',
            name: 'Salt Water Sandals',
            label: 'sandals',
            price: '€30,99'
        },
    ];

    /* If one of checkboxs is taken, then match with Filter function */ 
    checkboxChange (event) {
        let eventValue = event.target.value;
        let eventCheck = event.target.checked;
        if (eventCheck) {
            this.checkedFilters.push(eventValue);
        } else {
            this.checkedFilters = this.checkedFilters.filter( filter => filter != eventValue);
        }
        this.setFilteredItems();
    }

    setFilteredItems () {
        //boot, checkbox
        this.filterItems = this.items.filter(item => this.checkedFilters.includes(item.label));
    }

        /* If you click add to cart button, then each item will be added to cart */
 
    addtoCartButtons(evt) {
        let clickedButtons = this.querySelector('add-to-cart-btn');
        console.log('<-current click: ' +evt.target.value);
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

 
