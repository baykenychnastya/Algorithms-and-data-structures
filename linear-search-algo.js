const array = [1,4,6,9,3,12,45,23,5,7,7,7];
let countOfOperations = 0;

function linearSearch (array, elem) {
    for (let i = 0; i < array.length; i++) {
        countOfOperations +=1;
        if(array[i] === elem) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 76));
console.log("Count " + countOfOperations);