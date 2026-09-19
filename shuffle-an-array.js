// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. For instance:

/* Randomize array in-place using Durstenfeld shuffle algorithm */
// Image there is an empty cup and shuffle the juice by pouring into different cups.
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let arr = [1, 2, 3];

console.log(shuffle(arr));

console.log(shuffle(arr));

console.log(shuffle(arr));
