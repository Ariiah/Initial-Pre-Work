// Const is a stricter variable declaration than let. The let variable can actually be redefined, but only if the variable name is used, while const, on thr otherhand, cannot.

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
