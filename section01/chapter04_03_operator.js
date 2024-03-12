console.log("chapter03 operator");

//1. 대입 연산자
let var1 = 1;

//2. 산술 연산자
let a = 3;
let b = 2;

let add = a + b;
let minus = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;
console.table({ add, minus, mult, div, mod });

//3. 복합 대입 연산자: 산술연산 + 대입연산
let num = 10;
let i = 1;
console.log(i, num);
num += 20;
i += 1;
console.log(i, num);
num -= 20;
i += 1;
console.log(i, num);
num *= 20;
i += 1;
console.log(i, num);
num /= 20;
i += 1;
console.log(i, num);
num %= 20;
i += 1;
console.log(i, num);

//4. 증감 연산자
num++;
console.log("++num", num);
num--;
console.log("--num", num);
a = 0;
b = 0;
console.table({
  prefix: ++a,
  subfix: b++,
});
console.table({ a, b });

//5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.table({ or, and, not });

//6. 비교 연산자
let comp1 = 1 === "1";
let comp2 = 1 == "1"; // 타입 고려 안함
let comp3 = 1 !== 2;
let comp4 = 2 != "2"; // 타입 고려 안함

let comp5 = 1 === parseInt("1"); // 숫자로 처리
console.table({ comp1, comp2, comp3, comp4 });

//7. null 병합 연산자
let noDef; //undefined
let var2 = 10;
let nullData = null;

let res = noDef ?? var2;
console.log(res);
res = nullData ?? var2;
console.log(res);
res = var2 ?? nullData;
console.log(res);

let empty = "";
let ex = "imhere";
res = empty ?? ex;
console.log(res);
res = 0 ?? ex;
console.log(res);

//8. typeof 연산자

console.log({
  type: typeof var1,
  data: var1,
});
var1 = "str!!";
console.log({
  type: typeof var1,
  data: var1,
});
var1 = true;
console.log({
  type: typeof var1,
  data: var1,
});

//9. 삼항(조건) 연산자
let check = 20;
let child = 10;
let adult = 24;
const ageChecker = (age) => {
  return check < age ? "성인입니다." : "아동입니다";
};
console.log(String(child), ageChecker(child));
console.log(String(adult), ageChecker(adult));
