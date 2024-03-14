[실습 코드](../section01)

# I. 함수 기본
- 반복적으로 사용되는 코드를 한 곳에서 관리
- 관련 로직을 변경/추가하는 경우 함수 코드만 수정하면 되는 장점
- 함수 이름에 용도를 표기해 가독성을 높일수 있음

### A. 선언하기
- function function_name(parameters...){statements}
- return: 반환 값을 돌려주고 싶은 경우 사용하는 키워드
  - return을 만나면 함수 진행이 호출부로 이동
  - 키워드만 사용하면 undefined를 반환
```javascript
function greeting(message){
    console.log(`인사 봇: ${message} `);
}
```
## B. 호출하기
- (): 함수 호출 연산자
  - 매개변수를 따로 받지 않는다면 비우고 사용
  - 함수를 선언할때 매개변수가 지정된 경우 반드시 입력해야함
- 원하는 위치에서 호출
  - 함수명(parameters...);
  - 반환값을 사용한다면 변수에 삽입
```javascript
greeting("hello");
let myAge = getAge("1999-01-01");
```
## C. javascript의 함수 특징
- 함수 내부에 다른 함수를 선언해서 사용하는 것도 가능
- 호이스팅: 호출부보다 선언부가 아래에 있어도 호출가능(C, java에서는 안됨)\
  - 아래에 있는 함수를 끌어올려 처리

# II. 함수 선언식
- 함수도 하나의 변수로 인식하는 javascript
- 단 함수 연산을 담는 것이므로 함수 이름이 필요없다. 이를 익명함수라 한다.
  - 이름을 지정해도 외부에서 이름으로 호출 불가
- const function_name = function (parameters...){statement}
```javascript
const getAge=function unnessesaryName (birthStr){
    let age = 0;
    //...
    return age;
}
// unnessesaryName();// 호출 불가
const getArea=function(height, width){
    return height*width;
}
```
# III. 화살표 함수
- 선언식을 좀더 편하게 사용(익명 함수를 좀더 간편하게)
  - 콜백 함수를 사용할때 많이 사용 
- const function_name=(parameters...)=>{statement}
```javascript
const getAge=(birthStr)=>{
    let age = 0;
    //...
    return age;
}
```
# IV. 콜백 함수
- 자신이 아닌 다른 함수에 인수(parameter)로써 전달된 함수
- 여기서 sub 함수가 main의 콜백함수
```javascript
function main(value){
    //2. value(매개변수로 전달받은 sub함수)를 호출
    value();//return이 아님
}
function sub(){//3. 호출
    console.log("sub");
}
// 1. main 함수 호출, 매개변수로 sub 함수 전달
main(sub);
```
- 화살표 함수로 간단히 표기하면
```javascript
function main(value){
    //2. value(매개변수로 전달받은 sub함수)를 호출
    value();//return이 아님
}
main(()=>{
    console.log("sub");
});
```
## A. 콜백함수 활용
- 유사하지만 조금 다른 함수들이 있다면 이를 줄이는 방법
```javascript
function repeatx1(count){
    for(let i = 1; i<=count;i++){
        console.log(i);
    }
}
function repeatx2(count){
  for(let i = 1; i<=count;i++){
    console.log(i*2);
  }
}
function repeatx3(count){
  for(let i = 1; i<=count;i++){
    console.log(i*3);
  }
}
//...
```
- callback 사용
```javascript
function repeat(count, callback){
  for(let i = 1; i<=count;i++){
    callback();
  }
}
repeat(5, i=>console.log(i*6));// 여기서 처리
// 하나의 함수로 사용
```
# V. Scope(범위)
- 변수나 함수에 접근하거나 호출할 수 있는 영역
- var로 선언된 변수는 scope 제한이 없음(전역 변수)
  - 그만큼 외부 영향에 치명적이므로 가급적 사용안함
- scope를 적용하는 변수 선언 키워드
  - let: 가변변수
  - const: 불변변수
```javascript
let local_a = 1; 
var grobal_a = 10;
function fncA(){
    let local_b = 2;
    var grobal_b = 20;
    console.log(local_a);
    console.log(local_b);
    console.log(grobal_a);
    console.log(grobal_b);
    function fncB(){
        
    }
    fncB();
}
console.log(local_a);
// console.log(local_b); fncA scope에서만 접근 가능
console.log(grobal_a);
console.log(grobal_b);
// fncB(); fncA scope에서만 접근 가능
```