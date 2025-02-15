
function layeredDiscount(quantity){
    const oneHoundredPrice = 100;
    const twoHoundredPrice = 80;
    const ThreeHoundredPrice = 70;
    if(quantity <= 100){
        const Payable = quantity * oneHoundredPrice;
        return Payable;
    }
    else if(quantity <= 200){
        const discountFirstOneHundred = 100 * oneHoundredPrice;
        const discountEquation = quantity - 100;
        const discountLast = discountEquation * 80;
        const Payable = discountFirstOneHundred + discountLast;
        return Payable;
    }
    else{
        const discountFirstOneHundred = 100 * oneHoundredPrice;
        const discountSecondOneHundred = 100 * twoHoundredPrice;
        const discountEquation = quantity - 200;
        const discountLast = discountEquation * ThreeHoundredPrice;
        const Payable = discountFirstOneHundred + discountSecondOneHundred + discountLast;
        return Payable
    }
}
const givelayerdDiscount = layeredDiscount(380);
console.log(givelayerdDiscount)