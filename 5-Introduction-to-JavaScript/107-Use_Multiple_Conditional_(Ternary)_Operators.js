// While using multiple ternary operators saves space, it gets a bit hard to read after a while.

function checkSign(num) {
return (num > 0) ? "positive" : (num < 0) ? "negative" : (num === 0) ? "zero";

}

checkSign(10);
