[실습 코드](../section02)

# I. Truthy Falsy
- Boolean 타입이 아니어도 조건으로 사용 가능
  - 값이 없는 경우 falsy 처리
    - undefined
    - null
    - 0
    - -0
    - NaN
    - ""
    - 0n: 매우 큰 수를 표시할때 n을 붙임
  - 배열, 객체, 함수는 비어있어도 값이 있는 것(truthy)으로 처리
    - []
    - {}
    - ()=>{}

# II. 단락 평가
- 논리 연산에서 앞의 조건에서 전체의 결과가 결정되면 뒤의 불필요한 연산을 진행하지 않는 것을 이용해 마치 조건문처럼 코드를 조절하는 것
  - (false) && (any) : and는 앞에서 false가 나오면 뒤에 어떤 구문이 나와도 false이므로 이후 식을 진행하지 않음
  - (true) || (any) : or은 앞이 true이면 뒤의 구문과 관계 없이 true
- truthy, falsy도 적용 
# III. 구조분해할당
- 배열이나 객체의 내용을 분해해서 변수로 할당하는 방식
- 배열의 구조분해 할당: 스코프키워드 [원하는 변수명...] = 분해할당할 배열;
```javascript
let arr = [1,2,3,4];
let [one, two, three] = arr;//4는 따로 저장하지 않음
let [o, t, th, f] = arr;// 4개요소 다 분해 할당
let [a, b, c, d, e] = arr;//배열보다 많으면 undefined
console.log({a,b,c,d,e});
let [a1, b1, c1, d1, e1 = 6] = arr;//기본값을 지정해 null 방지
console.log({a1,b1,c1,d1,e1});
```
- 객체의 구조분해 할당: 스코프키워드 {keyName...}  = 분해할당할 객체;
```javascript
let person = {
    name: "hong gil",
    age: 27,
    hobby: "테니스",
}
let {name, age, hobby} = person;
let {//원하는 변수명으로 변환
    name: name1,
    age: age1,
} = person;
let {name:name2, age:age2, extra} = person;
console.log({name2,age2,extra});// 없는 property > undefined
let {name:name3, age:age3, extra2="ex"} = person;
console.log({name2,age2,extra2});// 초기화 가능
```
- 함수의 매개변수를 받을때 편리하게 사용 가능
```javascript
const printInformation = ({name, age, hobby})=>{
  // console.log(`이름: ${person.name}, 나이: ${person.age}, 취미: ${person.hobby}`);
  // console.log(`이름: ${name}, 나이: ${age}, 취미: ${hobby}`);
  let emptyData = "입력해주세요";
  console.log(`이름: ${name||emptyData}, 나이: ${age||emptyData}, 취미: ${hobby||emptyData}`);
}
printInformation(person);
printInformation({name:"aa"});
```
# IV. Spread Operator, Rest parameter
## A. spread operator
- 객체나 배열을 다른 collection에 삽입하기
  - ...collection 
```javascript
let obj1 = {a:1,b:2};
let obj2={
    ...obj1,
    c: 3,
    d: 4,
};
console.log(obj2);
// 연산 위치에 따라 덮어씌우기도 됨
let obj3 = {
    a: 123,
    b: 456,
    ...obj1
};
console.log(obj3);
```
- 함수에 사용
```javascript
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...arr1));
```
## B. rest parameter
- 여기서는 스프레드 연산자가 아닌 rest 매개변수라고 읽음
- 매개변수로 ...를 사용하면 받은 매개변수 값을 배열에 넣어 함수에서 사용하도록함
```javascript
//rest parameters
function fncA(...rest){
    console.log(rest);
}
fncA(1,2,3,4);
```
- 따로 이름을 지정해서 받는 경우 앞에 표시
- rest 매개변수의 이름은 자유롭게 사용
- 늘 매개변수의 마직에 위치시켜 남은 모든 매개변수를 받는 것이 목적이므로 ...rest뒤에 매개변수를 입력할 수 없다.
```javascript
function fncB(a, b, c, ...rest){
    console.log({a,b,c,rest});
}
fncB(1,2,3,4,5,6,7);
```
# V. 원시타입과 객체타입

|       | 원시타입                      | 객체타입                    |
|-------|---------------------------|-------------------------|
| 종류    | Number, String, Boolean   | Object, Array, Function |
| 변수의 값 | 값 자체                      | 참조값(메모리 위치)             |
| 복사,수정 | 원본과 다른 메모리 사용(원본에 영향을 안줌) | 참조값을 복사하기때문에 원본에도 영향을 줌 |
## A. 복사
- 원시타입을 복사하는 경우
```javascript
let l1 = 10;
let l2 = l1;
l2 = 20;
console.log({l1,l2});
```
- 객체타입을 복사(대입)하는 경우 
  - a = b: 얕은 복사. 참조값만 복사
    - 의도치않게 원본을 변경시킬 수 있음: side effect 발생 위험
  - {...a}: 깊은 복사. 내부 값 복사
```javascript
let o1 = {name:"홍길동"};
// 얕은 복사
let o2 = o1;
o2.name = "강감찬";//o1도 변경됨
// 깊은 복사
let o3 = {...o1};
o3.name = "이순신";//o3만 변경됨
console.log({o1,o2,o3});
```
>console
![복사 결과](img/ch2_05_copy.png)
## B. 비교
- 리터럴은 논리, 비교 연산자
- 객체 타입 
  - 얕은 비교: 단순 참조위치 비교
    - o1 === o2
  - 깊은 비교: 객체별로 다양한 방법이 있음
    - 문자열로 정렬시키는 내장 함수 사용이 자주 사용됨
      - JSON.stringify(o1)===JSON.stringify(o2); 

# VI. 반복문으로 객체와 배열 순환하기(Iterator)
- 순회: 배열, 객체 등 여러 값의 집합의 요소를 하나씩 돌아가면서 접근하는 것.
- 반복문 사용하거나 내장함수 사용
## A. 배열 순회
- 요소가 순서를 갖는 배열
```javascript
let arr=[1,2,3];
```
- 배열 인덱스 사용하기
```javascript
for(let i = 0; i < arr.length; i++){
    console.log(i+". "+arr[i]);
}
```
- for of 반복문
  - java의 inhanced for문과 유사
  - index를 통한 조건 처리가 안됨
```javascript
for(let item of arr){
    console.log(item);
}
```
## B. 객체 순회
- 객체는 순서가 없음
```javascript
let person = {
    name: "hong",
    age: 27,
    hobby: "drink",
};
```
- Object.keys()를 사용해 key 배열로 반복문 처리하기
```javascript
let personKeys = Object.keys(person);
for(let propertyKey of personKeys){
    console.log(person[propertyKey]);
}
```
- Object.values()를 사용해 value 배열 반복문 처리하기
```javascript
let personValues = Object.values(person);
for(let value of personValues){
    console.log(value);
}
```
- for in 반복문 사용하기
```javascript
for(let key in person){
    const value = person[key];
    console.log(`${key}: ${value}`);
}
```
# VII. 배열 관련 메서드
# IIX. Date 객체


