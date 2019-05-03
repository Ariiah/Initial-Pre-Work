// When the let variable is defined within a block, it is exclusive to that block. So if the same variable name is declared outside the block, it is not effected.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
   let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
