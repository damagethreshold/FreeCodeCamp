function testElse(val) {
    let result = "4";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        return "5 or Smaller";
    }
    return result;
}
testElse(4);