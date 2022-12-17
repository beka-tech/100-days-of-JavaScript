// Is Five
// Define a function isFive that will return true if a number is equal to 5 and false if it is not.

function isFive(num) {

    if (num == 5 ){
          return true ;
        
    }
    else
        return false;
    }
  
  
  console.log(isFive(5)); // => true
  console.log(isFive(13)); // => false

  console.log("");

  //Is Odd
// Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.

// Write two versions of this function, one using conditionals (if) and one without using conditionals

  function isOdd(num) {
    // your code here!
    if (num % 2  !== 0)
       return true;
    else 
       return false;
  }
  
  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true