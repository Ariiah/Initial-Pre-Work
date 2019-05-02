// And Or operator acts the same as the And operator, but not all conditions need to be met. Only one of them have to be true in order for the condition to pass.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
