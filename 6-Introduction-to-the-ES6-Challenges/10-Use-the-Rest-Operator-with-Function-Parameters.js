// Instead of being confined to the number of parameters initially stated, the rest operator allows for flexible use of however many parameters you want to include.

const sum = (function() {
  "use strict";
  return function sum(...args) {
    // const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
