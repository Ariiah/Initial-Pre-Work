// By using string concatenation, a new sentence was able to be formed by inserting a mix variables and new strings via a function.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
