console.log(" Yell \\\\\\\\\\\\\\");
function yell(str) {
    // your code here...  
    return str.toUpperCase();
  }
  
  console.log(yell("I want to go to the store")); // => "I WANT TO GO TO THE STORE!!!"
  console.log(yell("Time to program")); // => "TIME TO PROGRAM!!!"


console.log(" Echo \\\\\\\\\\\\\\");
function echo(string) {
    // your code here...
    console.log (string.toUpperCase(), string, string.toLowerCase());
    
  }
  
  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"