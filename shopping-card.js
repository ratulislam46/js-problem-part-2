//shopping total cost 
const shoppingItems = [
    { name: 'pant', price: '700', quantity: 2},
    { name: 'shirt', price: '500', quantity: 2},
    { name: 'shoes', price: '850', quantity: 4},
    { name: 'bag', price: '600', quantity: 1},
    { name: 'panjabi', price: '900', quantity: 3},
    { name: 'borka', price: '1300', quantity: 1}
]
function shopping(items){
    let total = 0;
    for(const item of items){
        const peritems = item.quantity * item.price;
        total = total + peritems
    }
    return total
}

const giveShopping = shopping(shoppingItems);
console.log('Total Payable', giveShopping)