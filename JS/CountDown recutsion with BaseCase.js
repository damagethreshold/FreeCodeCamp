function countdown(i) {
   if (i <= 1) {  // base case
        return;
    } else {     // recursive case
        countdown(i - 1);
    }
}
console.log(countdown(60));