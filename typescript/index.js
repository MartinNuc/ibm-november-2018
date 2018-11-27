"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculations_1 = __importStar(require("./calculations"));
// inputs: two numbers
// output: number
let result = calculations_1.add(6, 2);
console.log(result);
console.log(calculations_1.default);
console.log(calculations_1.subtract(10, 2));
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
