// const siam = 2500;
// const ratul = 3200;
// if(siam > ratul){
//     console.log('Bigest number:', siam)
// }
// else{
//     console.log('Bigest number:', ratul)
// }


// same task doing at function
function BigestNumber(siam, ratul){
    if(siam > ratul){
        return siam;
    }
    else{
        return ratul;
    }
}
const giveNumber = BigestNumber(1450, 1480);
console.log('Bigest Number:', giveNumber)
