// The class keyword, and the constructor following it, saves a bit of space in the code when declared.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor (name) {
    this.name = name
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
