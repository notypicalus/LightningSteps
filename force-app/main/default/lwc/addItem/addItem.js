import { LightningElement, api } from 'lwc';

export default class AddItem extends LightningElement {
    @api message; 

    @api
    childCompo (name) {
        alert(name);
        this.message = name
    }
    handleClick(){
        const event = new CustomEvent('btnclick', {
            detail: {
                key: '200',
                value: 'ParentComp'
            }
        })
    }  
}