// The let keyword is a more strict variable declaretion than var. Var is a looser declaration and can overrite variables.

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
