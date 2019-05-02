// The == operator checks if the types are remotely similar, while the === operator need to be exactly the same.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, 10);
