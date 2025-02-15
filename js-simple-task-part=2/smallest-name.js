//task 2

function friendNames(names){
    let small = names[0];
    for(const name of names){
        if(small.length > name.length){
            small = name; 
        }
    }
    return small;
}
const giveFriendName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const frndNames = friendNames(giveFriendName);
console.log('Smallest name:', frndNames)