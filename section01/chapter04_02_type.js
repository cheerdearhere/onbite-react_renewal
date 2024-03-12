//1. Number type
// 다양한 숫자 저장 가능
let intNum = 27;
let floatNum = 1.5;
let negativeNum = -20;
//사칙연산 사용 가능
const a = 5;
const b = 3;
console.table({
  "a + b": a + b,
  "a - b": a - b,
  "a * b": a * b,
  "a / b": a / b,
  "a % b": a % b, //모듈러 연산
});
// 개념 수
//무한대
let inf = Infinity;
let nInf = -Infinity;
// 계산 오류 또는 수가 아님
let nan = NaN;

//2. String type: 문자열
let myName = "홍길동 ";
let myJob = "학생";
let introduce = myName + myJob;
console.log(introduce);
// 백틱(`) 사용하기
let introduceText = `이름: ${myName}, 직업: ${myJob}`;
console.log(introduceText);

//3. boolean
let isSwitchOn = true;
let isEmpty = false;
let isOlder = 12 < 11;
console.table({ isSwitchOn, isEmpty, isOlder });

//4. Null
let empty = null;

//5. Undefined
let none;
console.table({ empty, none });

//6. type
let num = 10;
let str = "20";
let result = num + str;
console.log(typeof result);
console.log({ result });

//7. 묵시적 형변환
let str1 = "10";
let strToNum = Number(str1);
console.log(typeof strToNum);
result = num + str;
console.log({ result });
let num1 = 20;
str1 = String(num1);
result = num1 + str;
console.log({ result });
