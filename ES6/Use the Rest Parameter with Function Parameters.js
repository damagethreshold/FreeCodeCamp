//const sum = (x, y, z) => {
//    const args = [x, y, z];
//    return args.reduce((a, b) => a + b, 0);
//  }

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0, 1, 2));

//const product = (n1, n2, n3) => {
//    const args = [n1, n2, n3];
//    return args.reduce((a, b) => a * b, 1);
//  }
//  console.log(product(2, 4, 6)); //48

//Can be written as such

//  const product = (...n) => {
//    return n.reduce((a, b) => a * b, 1);
//  }
//  console.log(product(2, 4, 6)); //48