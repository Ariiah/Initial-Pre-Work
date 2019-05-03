// The spread operator acts very similarly to the rest operator, except it works with array values.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);
