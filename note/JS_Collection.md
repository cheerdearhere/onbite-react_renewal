- 한 변수에 다양한 타입의 정보를 담을 때 사용
  - 객체: key-value
  - 배열: index
# I. 객체
## A. 객체를 생성하는 두가지 방법
- 객체 생성자
```javascript
let obj = new Object();
```
- 객체 리터럴
```javascript
let obj = {};
```
## B. 값 입력하기
- key: value로 관리
- 리터럴, 배열, 객체, 함수까지도 담을 수 있다
- key가 띄어쓰기가 있는 경우 ""를 사용
```javascript
let a = {
    key1: "value1",
    key2: 11,
    key3: true,
    key4: ["option1","option2"],
    key5: {
        id: "123",
        age: 23,
    },
    key6: (age)=>{
        return `${age} 세`;
    },
    "like cat": true
}
```
## C. 객체 프로퍼티에 접근하기
### 1. 점 표기법
- objectVariable.propertyName
```javascript
let name = a.key1;
```
### 2. 괄호 표기법
- objectVariable[keyNameString]
```javascript
let name = a["key1"];
```
- 변수를 키 값으로 사용할 수 있음
  - 동적으로 처리할때 유용
```javascript
let propertyKey = "age";
let age = a.key5[propertyKey];
```
- 존재하지 않는 property key > undefined
### 3. 객체 속 함수 사용하기
- 함수 선언식과 같음
```javascript
    a.key6(19);
```
### 4. 프로퍼티 추가, 변경
```javascript
let person = {
    id: "00132",
    name: "hong"
};
```
- 추가
```javascript
person.job = "fe developer";
person["hobby"] = "drawing";
```
- 수정
```javascript
person.job = "be developer";
person["hobby"] = "swimming";
```
- 삭제: delete 키워드
```javascript
delete person.job;
delete person["hobby"];
```
- 프로퍼티 존재유무 확인: in 키워드
  - "keyName" in objectVariable
  - Boolean 반환
```javascript
let result1 = "name" in person;
let result2 = "tail" in person;
```

# II. 객체 심화
## A. 상수 객체
- const를 사용한 객체.
- 겍체 자체를 재정의하는 것은 불가하나 프로퍼티를 수정하는 것은 가능
```javascript
const animal = {
  type  : "cat",
  name  : "나비",
  color : "black",
};
// animal = 1; 수정불가
// update properties 
animal.name = "범";
animal.age = 3;
delete animal.color;
```
## B. method
- 객체 프로퍼티 중 함수인 것
```javascript
const person = {
  name: "홍길동",
  annonymousFnc: function(){
      console.log("익명");
  },
  arrowFnc: ()=>{
      console.log("=>");
  },
  methodInit(){
      console.log("method");
  }
}
```
- 호출방식은 동일

# III. 배열
- 여러개의 값을 순차적으로 사용
- 객체와 방식은 유사함
## A. 배열 생성하기
- 배열 생성자
```javascript
let arrA = new Array();
```
- 배열 리터럴
```javascript
let arrB = [];
```
## B. 값 접근하기
- 선언할때 입력
```javascript
let arr = [1,2,3,4];
```
- 타입은 자유롭게 사용가능
  - but 데이터 관리의 입장에서 타입 유지 권장
- index를 사용해 접근
```javascript
let item1 = arr[0];
```
- 수정
```javascript
arr[3] = 99;//4번째 요소의 값을 변경
```