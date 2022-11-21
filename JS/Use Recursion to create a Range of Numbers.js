function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    }   else {
        var countArray = rangeOfNumbers(startNum, endNum - 1)
        countArray.push(endNum);
        return countArray;
    }
}