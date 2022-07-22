let number = prompt("Please enter the number of your choice");
number = Number(number);
function factorialize(number) {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    // i = 2,3,4,5
    product *= i; // product = product * i
  }
  return printToScreen(product);
}
function printToScreen(data) {
  console.log("Irene this is the factorial of five: ", data);
}
factorialize(number);
/**
 * 5! = 5*4*3*2*1
 * 5*(5 - 1) = 20
 * 20*(4 - 1) = 6012
 * 60(3 - 1) = 120
 * 120(2 - 1) = 120
 * 5! = 120;
 * factorial of f = 5*4*3*2*1
 *
 * 10
 */

// factorialize(10)

// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }

// console.log(factorialize(5));
