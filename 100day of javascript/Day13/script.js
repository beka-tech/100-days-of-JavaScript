function combineArray(array1, array2) {
    // your code here...
    let newarrays = array1.concat(array2);
    
    return newarrays
    
}

console.log(combineArray([1, 2], [3, 4])); // => [1, 2, 3, 4]
console.log(combineArray([17, 5], [6, 7]));  // => [17, 5, 6, 7]