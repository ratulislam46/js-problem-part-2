//cheapest mobile price in array
const mobiles = [
    { name: 'Oppo', price: 13000, model: 'A31'},
    { name: 'Vivo', price: 17000, model: 'A31'},
    { name: 'Iphone', price: 95000, model: 'A31'},
    { name: 'redmi', price: 21000, model: 'A31'},
    { name: 'samsang', price: 65000, model: 'A31'}
]
function mobileModel (mobiles){
        let max = mobiles[0];
        for(const mobile of mobiles){
        if(max.price > mobile.price){
            max = mobile;
        }
    }
    return max;
}
const giveMobileModle = mobileModel(mobiles);
console.log('this is cheapest mobile price:', giveMobileModle);


// highest mobile price in array
// const mobileModel = [
//     {name: 'oppo', price: 10000, colour: 'black'},
//     {name: 'vivo', price: 13000, colour: 'black'},
//     {name: 'samsung', price: 50000, colour: 'black'},
//     {name: 'oneplus', price: 30000, colour: 'black'},
//     {name: 'Iphone', price: 980000, colour: 'black'}
// ]
//  function bestMobile (mobiles){
//     let max = mobiles[0];
//     for(const mobile of mobiles){
//         if (max.price < mobile.price){
//             max = mobile;
//         }
//     }
//     return max;
// }
// const giveBestMobile = bestMobile(mobileModel);
// console.log('this is higest price mobile:', giveBestMobile)