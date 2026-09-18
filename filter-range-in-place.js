// Write a function filterRangeInPlace(arr, a, b) that gets an array arr 
// and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
   for (let i = arr.length - 1; i >= 0; i--) {
    // remove element smaller than a or larger than b
    if (arr[i] < a || arr[i] > b) {
        arr.splice(i,1);
    }
   }
}

let arr = [5, 3, 8, 1];
let filtered = filterRangeInPlace(arr, 1, 4);
console.log(arr);