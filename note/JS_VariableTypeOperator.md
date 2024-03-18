[실습 코드](../section01)

---

# I. 변수와 상수

- 이름을 지정하고 값을 저장
- 상수는 선언 뒤에 값을 재정의할 수 없음

## A. 변수

- 선언

```javascript
let variable;
var num1;
```

- 정의

```javascript
num1 = 10;
//선언과 정의를 한번에
let num2 = 30;
```

- 값을 정의하지 않으면 undefined

```javascript
let age;
console.log(age);
age = 27;
console.log(age);
```

> console)

```dockerfile
undefined
27
```

## B. 상수

- 값을 변경시키지 않는 수
- 선언과 정의를 분리할 수 없다.

```javascript
const birth = "1997.07.17";
//birth = "change";
```

## C. 변수 명명 규칙

### 1. $, \_를 제외한 기호는 사용할 수 없다

```javascript
let $_name;
//let #aaa;
```

### 2. 숫자로 시작할 수 없다

```javascript
let a2;
//let 2a;
```

### 3. 예약어를 사용할 수 없다

```javascript
// let let;
// let if;
// let class;
```

## D. 변수 명명 가이드

- 팁 정도지 필수는 아님
- 함께하는 팀의 규칙을 따르는 것이 좋음
- 변수명은 그 용도가 명확한 것이 좋음
- 너무 길다면 고민필요

# II. 자료형

## A. 원시타입 - 리터럴

| 타입      | 설명                  |
| --------- | --------------------- |
| Number    | int, double, float... |
| String    | char[]                |
| Boolean   | true, false           |
| Null      | null                  |
| Undefined | undefined             |

### 1. Number

- 정수, 실수

```javascript
let intNum = 27;
let floatNum = 1.5;
let negativeNum = -20;
```

- 연산 사용 가능

```javascript
const a = 5;
const b = 3;
console.table({
  "a + b": a + b,
  "a - b": a - b,
  "a * b": a * b,
  "a / b": a / b,
  "a % b": a % b, //모듈러 연산
});
```

- 개념 수 포함

```javascript
//무한대
let inf = Infinity;
let nInf = -Infinity;
// 계산 오류 또는 수가 아님
let nan = NaN;
```

### 2. 문자열

- String : char[]
- 일반적으로 ""로 표기

```javascript
let myName = "홍길동";
let myJob = "학생";
let introduce = myName + myJob;
console.log(introduce);
```

- 백틱을 사용해 java의 El문처럼 사용 가능

```javascript
let introduceText = `이름: ${myName}, 직업: ${myJob}`;
```

### 3. Boolean

- 논리연산의 결과
- 유무를 사용하기도 함

```javascript
let isSwitchOn = true;
let isEmpty = false;
let isOlder = 12 < 11; //false
```

### 4. Null

- 입력값 없음

```javascript
let empty = null;
```

### 5. Undefined

- 값을 정의하지 않음

```javascript
let none;
```

- null과 undefined
  - null은 개발자가 의도한 빈 공간
  - undefined는 대부분 의도하지 않은 빈 공간

## B. 객체 타입 - Object

- 추후 자세히

| 타입     | 설명                             |
| -------- | -------------------------------- |
| Array    | 같은 타입의 자료들 collection    |
| Function | require returnType,parameterType |
| RegexExp | 정규식                           |

## C. 형변환

- 자바스크립트 엔진이 알아서 변환하는 경우: 묵시적 형변환
  - 굳이 체크할 필요 없을만큼 안전

```javascript
let num = 10;
let str = "20";
let result = num + str; //string
```

- 개발자가 직접 지정해서 형변환
  - 데이터 상실 또는 에러의 위험이 있어 그 위험을 감수하는 형변환
  - 내장함수(Number, String, Boolean...) 사용 가능

```javascript
let str1 = "10";
let strToNum = Number(str1);
```

# III. 연산자

- 프로그래밍에서 연산을 위해 사용되는 기호, 키워드

## A. 대입 연산자

- 왼쪽 피연산자의 공간에 오른쪽 피연산자의 값을 붙여넣기 - l: left, location - r: right, read
  > 피연산자(l-value) = 피연산자(r-value);

```javascript
let var1 = 1;
```

## B. 산술 연산자

- 사칙연산 + 나머지 연산
- 일반적인 연산과 마찬가지로 곱연산이 합연산보다 우선순위가 높음
- 필요에 따라 괄호로 우선순위 지정

```javascript
let a = 3;
let b = 2;

let add = a + b;
let minus = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;
```

## C. 복합 대입 연산자

- 산술 연산 + 대입 연산자

```javascript
let num = 10;
num += 20; //30
num -= 20; //10
num *= 20; //200
num /= 20; //10
num %= 20; //10
```

## D. 증감 연산자

- 단항연산자
- 1씩 증가, 감소
- prefix(전위 연산), subfix(후위 연산)에 따라 연산 시점이 달라짐

```javascript
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
```

> console)

```dockerfiles
++num 11
--num 10

prefix	1
subfix	0

a	1
b	1
```

## E. 논리 연산자

- boolean 자료를 사용하는 연산자

```javascript
let or = true || false; // true
let and = true && false; // false
let not = !true; // false
```

## F. 비교 연산자

- compare
- 타입을 고려하지 않는 경우 ==도 사용가능하나 보안을 위해 === 권장
  - !=와 !==관계도 마찬가지
  - parseInt()를 사용하거나 Number의 함수를 사용

```javascript
let comp1 = 1 === "1";
let comp2 = 1 == "1"; // 타입 고려 안함
let comp3 = 1 !== 2;
let comp4 = 2 != "2"; // 타입 고려 안함

let comp5 = 1 === parseInt("1"); // 숫자로 처리
```

## G. null 병합 연산자

- 존재하는 값을 추려내는 기능
- null, undefined가 아닌 값을 찾아서 사용

```javascript
let noDef; //undefined
let var2 = 10;
let nullData = null;

let res = noDef ?? var2;
console.log(res); //10
res = nullData ?? var2;
console.log(res); //10
```

- 앞의 변수가 값이 있는 경우에는 바로 출력하고 해당 라인 종료
  - 둘다 값이 있어도 마찬가지

```javascript
res = var2 ?? nullData;
console.log(res);
```

- 단 ""와 0은 데이터가 있는 것으로 처리

```javascript
let empty = "";
let ex = "imhere";
res = empty ?? ex;
console.log(res); //""
res = 0 ?? ex;
console.log(res); //0
```

## H. typeof 연산자

- 뒤에오는 변수의 타입을 문자열로 반환

```javascript
let var1 = 1;
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
```

> console

```
{type: 'number', data: 1}
{type: 'string', data: 'str!!'}
{type: 'boolean', data: true}
```

## I. 삼항 연산자(조건 연산자)

- 항을 3개 사용
  - (조건식) ? (true일때) : (false일때)

```javascript
let check = 20;
let child = 10;
let adult = 24;
const ageChecker = (age) => {
  return check < age ? "성인입니다." : "아동입니다";
};
console.log(String(child), ageChecker(child));
console.log(String(adult), ageChecker(adult));
```
