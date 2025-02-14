//which biggest number in array
// const height = [ 56, 57, 76, 87, 88, 98, 74, 27]
// function maxHeight (numbers){
//     let max = numbers[0];                                                   /* explain this line*/
//     for(const num of numbers){
//         if(num > max){
//             max = num;                                                      /* explain this line*/
//         }
//     }
//     return max;
// }
// const giveheight = maxHeight(height);
// console.log('max height:', giveheight)




//which lowest number in array
const weight = [39, 46, 65, 46, 28, 49, 59, 79, 37, 53]
function maxWeight(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num
        }
    }
    return min;
}
const giveWeight = maxWeight(weight);
console.log('Min weight:', giveWeight)