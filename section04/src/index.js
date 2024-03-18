console.log("use node package");

//Common JS
// const moduleData = require("./math");
// console.log(moduleData.add(1,2));
// console.log(moduleData.httpStatus.OK);

// ESM
import {
    add,
    sub,
    httpStatus
} from "./math.js";
console.log(add(1,2));
console.log(sub(3,2));
console.log(httpStatus.OK);

// library
import randomColor from "randomcolor";
const color = randomColor();
console.log(color);