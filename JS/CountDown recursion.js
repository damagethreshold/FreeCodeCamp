function countdown(n) {
    if (n <= 1) { 
         return [];
     } else {     // recursive case
         countdown(n - 1);
         countArray.push(n);
         return countArray;
     }
 }
 console.log(countup(60));