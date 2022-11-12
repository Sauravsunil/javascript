let arr = [1,2,3,4,5,6,7];

let arr1 = [5,6,7,8,9,10]

const arr2 = arr.concat(arr1)

function duplicate(arr2) {
    return [new Set(arr2)];
}

console.log(duplicate(arr2));

