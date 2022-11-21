function checkEqual(a, b) {
   // if (a > b) {
   //     return "Equal";
   // } else {
   //     return "Not equal";
   // }
    return a > b ? "Not Equal" : a < b ? "Not Equal" : "Equal";
}

console.log(checkEqual(1, 2));