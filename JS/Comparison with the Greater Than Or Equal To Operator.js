function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    else return "Less than 10";
}
console.log(testGreaterOrEqual(val)); 