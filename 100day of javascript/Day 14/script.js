//Count Odd Numbers in an Interval Range
var countOdds = function(low, high) {
    if (low % 2 == 0)
        low++;
    
    if (high % 2 == 0)
        high--;
    
    console.log( (high-low)/2 + 1);
};
countOdds (3,7);