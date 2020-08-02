import { LightningElement, track} from 'lwc';

export default class LightningSteps extends LightningElement {

    @track
    title = 'Lightning Steps Shoe Store';

    @track initialItems = [];

    items = [
        {
            id: 'shoes1',
            name: 'Chelsea',
            label: 'Boot',
            price: '€20,99',
        },
        {
            id: 'shoes2',
            name: 'Nike AirZoom Pegasus 37',
            label: 'Running shoes',
            price: '€19,99'
        },
        {
            id: 'shoes3',
            name: 'Salt Water Sandals',
            label: 'sandals',
            price: '€30,99'
        },
    ];

    productsLabels = {
        name: 'shoes filter',
        labels: [],
        price: [],
        addLabels: function (label, price) {
            this.labels.push(
                {
                label: label,
                price: price
            })
        }
    };

    /* If one of checkboxs taken, then match with Filter function */ 
    checkboxCheck (evt) {
        let isChecked = this.querySelector('slds-checkbox');
        console.log('checked!') 

        /* sort the shoes based on the checkbox */
    }

    findLabels (label) {

        const result = this.items.filter(item => item.includes(this.item.label))
        console.log(result, 'result')
        console.log(label, 'label')

        if (result === 'boots') {
            console.log('boots')

        } 
        else if (result === 'sneakers')
        {

            console.log('sneakers')

        } else {
            console.log('sandals')
            
        }
        
    }


    /* Filter Objects in an Array and create a new Array */ 
    findItems (item, query) {
        let sortLabels = function () {
            console.log(item);
            /* find the labels */ 
            let filteredLabels = this.items.filter(function(item, index){
                let isLabelMatch = this.item.label.toLowerCase().includes(query.toLowerCase())
                return isLabelMatch === this.item.label
            })
            }
            return isLabelMatch;
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

 
