function discountPrice (quantity){
    if(quantity <= 100){
        const Payable = quantity * 100;
        return Payable;
    }
    else if(quantity >= 200){
        const Payable = quantity * 90;
        return Payable;
    }
    else if (quantity >= 250){
        const Payable = quantity * 75;
        return Payable;
    }
    else {
        const Payable = quantity * 60;
        return Payable;
    }
}
const giveDiscountPrice = discountPrice(244);
console.log('discount price', giveDiscountPrice)