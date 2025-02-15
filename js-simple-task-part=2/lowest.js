//task 1

function lowestNumber (numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(min > number){
            min = number;
        }
    }
    return min;
}
const heights = [167, 190, 120, 165, 137]
const giveLowestNumber = lowestNumber(heights);
console.log('This is lowest number:', giveLowestNumber)

