function logBetween1(min,max,step){
    for (j = min; j<= max; j +=step ){
        console.log(j);
     
    }
  }
    logBetween1(5,9,1);

    function logBetweenStepper(min1, max1, step1){
        let j = min1;
        while(j <= max1){
           console.log(j)
          j += step1;  
        }
        
    } 
    logBetweenStepper(-10, 15, 5);