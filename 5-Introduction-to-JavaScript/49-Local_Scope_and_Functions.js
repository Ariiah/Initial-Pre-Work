// When variables are defined within a funtion, it is invivsible to the rest of the code. That also means the same variable can be defiend in another function without the other being effected.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 5
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log(myVar);

// Now remove the console log line to pass the test
