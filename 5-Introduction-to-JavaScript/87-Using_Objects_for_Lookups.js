// To save room in the code, converting the switch statement to an object can also help with an easier way to find information.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
    result = lookup[val]
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
