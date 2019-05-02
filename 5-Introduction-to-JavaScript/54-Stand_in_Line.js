// This funtion was a little more involved, but using previously learned methods, the numbers were able to be added and removed.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item)
  var removeNum = arr.shift(item)
  return removeNum;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
