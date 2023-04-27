// Write a function named min that takes two arguments and returns their minimum.

function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}

console.log(min(10, 30));
// → 10
console.log(min(12, 21));
// → 12
