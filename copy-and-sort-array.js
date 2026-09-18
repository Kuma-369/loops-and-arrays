// We have an array of strings arr. 
// We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    const newArr = arr.slice().sort();
    return newArr;
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS