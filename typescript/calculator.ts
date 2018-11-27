
let calculator: Calculator = {
  pi: 3.14,
  add: (a: number, b: number) => a + b,
  subtract(a: number, b: number) {
    return a - b;
  }
}

interface TwoOperandFunction {
  (a: number, b: number): number
}

interface Calculator {
  pi: 3.14;
  add: TwoOperandFunction;
  subtract: TwoOperandFunction;
}