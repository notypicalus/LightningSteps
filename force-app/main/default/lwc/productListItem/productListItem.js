import { LightningElement, track} from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi'

// A component to list products and to show prices 
// and a picture of the product with "add to cart" button


export default class ProductListItem extends LightningElement {

    @track initialProducts = [];

    addToCartHandler(e) {
        const clickedProduct = this.template.querySelector("lightning-input");
        console.log("curruent value ", clickedProduct.value);
    
        // const product = [
        //     {
        //         productId: this.products.length,
        //         productName: product.value,
        //         check: false,
        //     }
        // ]
        // this.initialProducts.push(product);
        clickedProduct.value = "";


    }

    get addedItems (){
        return this.initialProducts && this.initialProducts.length 
        ? this.products.filter(product => !product.added) 
        : [];
            
    }


    // productListItem () {


    //     // to update the list
    //     const [list, setList] = useState(initialList);

    //     const products = [
    //         {
    //             id: 'shoes1',
    //             label: 'boots'
    //         },
    //         {
    //             id: 'shoes2',
    //             label: 'sneakers'
    //         },
    //         {
    //             id: 'shoes3',
    //             label: 'sandals'
    //         }
    //     ];
    // }
}