// The sort() sorts the elements of an array.
// The sort() overwrites the original array.
// The sort() sorts the elements as strings in alphabetical and ascending order.


// Sort and then reverse the order:

// 1
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits)

// 2

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return a-b});
// console.log(points)

// 3

// Sort numbers in descending order:
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
// console.log(points)

// 4
// Find the lowest value:
// const points = [40, 100, 1, 5, 25, 10];
// // Sort the numbers in ascending order
// points.sort(function(a, b){return a-b});
// let lowest = points[0];
// console.log(lowest)

// 5
// Find the highest value:
// const points = [40, 100, 1, 5, 25, 10];
// // Sort the numbers in descending order:
// points.sort(function(a, b){return b-a});
// let lowest = points[0];
// console.log(lowest)

// 4

// Find the highest value:
const points = [40, 100, 1, 5, 25, 10];
// Sort the numbers in ascending order:
points.sort(function(a, b){return a-b});
let highest = points[points.length-1];
console.log(highest)