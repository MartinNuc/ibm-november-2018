import PI, { add, subtract } from "./calculations";

// inputs: two numbers
// output: number

let result = add(6, 2)
console.log(result);
console.log(PI);
console.log(subtract(10, 2));









function sum(array: number[]): number {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
