//multiple product buy
function woodQuantity (chairQty, tableQty, bedQty){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 30;
    const allChairWood = chairQty * perChairWood;
    const allTableWood = tableQty * perTableWood;
    const allBedwood = bedQty * perBedWood;
    const totalWood = allChairWood + allTableWood + allBedwood;
    return totalWood;
}

const giveWoodQuantity = woodQuantity(6, 1, 1);
console.log('Total need wood:', giveWoodQuantity)



//multiple dress buy
// function dressQuantity ( shirtQty, pantQty, shoeQty){
//     const perShirtPrice = 500;
//     const perPantPrice = 700;
//     const perShoePrice = 900;
//     const allshirtPrice = shirtQty * perShirtPrice;
//     const allPantPrice = pantQty * perPantPrice;
//     const allShoePrice = shirtQty * perShoePrice;
//     const totalPrice =  allshirtPrice + allPantPrice + allShoePrice;
//     return totalPrice;
// }
// const giveDressQuantity = dressQuantity(2, 3, 2);
// console.log('Total need money:', giveDressQuantity)

