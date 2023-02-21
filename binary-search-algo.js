const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let countOfOperations = 0;

function binarySearch (array, elem) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while(found === false && start <= end) {
        countOfOperations +=1;
        middle = Math.floor((start + end) / 2);
        if(array[middle] === elem) {
            found = true;
            position = middle;
            return position;
        }
        if(elem < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(array, 10));
console.log("Count " + countOfOperations);