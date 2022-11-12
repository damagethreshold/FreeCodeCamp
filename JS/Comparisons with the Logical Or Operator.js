//if (num > 10) {
//    return "No";
//}
//if (num < 5) {
//  return "No";
//}
//return "Yes";
//will return Yes only if num is between 5 and 10 (5 and 10 included). The same logic can be written as:
// if (num > 10 || num < 5) {
// return "No";
//}
//return "Yes";
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
}
    else return "Inside";
}
console.log(testLogicalOr(15));