//task 3

const products = [
    {name: 'laptop', price: 35000, quantity: 1},
    {name: 'tablet', price: 15000, quantity: 1},
    {name: 'mobile', price: 20000, quantity: 1}
]
function multipleProduct (products){
    let total = 0;
    for(const product of products){
        const productPrice = product.price * product.quantity;
        total = total + productPrice;
    }
    return total;
}
const giveMultipleProduct = multipleProduct(products);
console.log(giveMultipleProduct)