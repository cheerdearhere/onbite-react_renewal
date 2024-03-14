[실습 코드](../section01)

---

# I. 조건문(Conditional Statement)
- 특정 조건을 만족했을때 실행되는 구문
- 종류
  - if
  - if-else
  - if-else if
  - switch-case
## A. if문
```javascript
if(조건){
    // 조건이 true일때 실행되는 구문
}
```
## B. if-else
```javascript
if(조건){
    // 조건이 true일때 실행되는 구문
}
else{
    // 조건이 false일때 실행되는 구문
}
```
## C. if-else if
```javascript
if(조건1){
    // 조건1이 true일때 실행되는 구문
}
else if(조건2){
    // 조건2가 ture일때 구문
}
//...
else{
    // 모든 조건이 false일때 실행되는 구문
}
```
## D. switch-case
- 조건문 대신 변수를 사용(값 기준 비교)
- default는 if문의 else와 같음
- break가 없으면 아래 케이스까지 체크
```javascript
let variable = "cat";
switch(variable){
  case "dog":
      console.log("switch에서 체크한 변수 값이 같을 때 실행되는 구문");
      break;
  case "cat":
      console.log("switch에서 체크한 변수 값이 같을 때 실행되는 구문");
      break;
  case "bear":
      console.log("switch에서 체크한 변수 값이 같을 때 실행되는 구문");
      break;
  case "snake":
      console.log("switch에서 체크한 변수 값이 같을 때 실행되는 구문");
      break;
  case "tiger":
      console.log("switch에서 체크한 변수 값이 같을 때 실행되는 구문");
      break;
  default:      
      console.log("switch에서 체크한 변수 값이 없을 때 실행되는 구문");
      break;
}
```

# II. 반복문(Loop, Iteration)
- 반복을 처리
- 반복문 관련 키워드
  - break: 반복문 종료
  - continue: 해당 루프 종료. 다음 반복 진행
## A. for
- for(초기식;조건식;증감식){반복 구문}
  - 초기식: counter 변수 선언, 초기화(외부에서 선언할 수 있음) 
  - 조건식: 조건문이 true인 동안 반복
    - false가 되면 멈춤
  - 증감식: counter 변수의 변경을 처리
    - 단항증감연산
    - 복합대입연산
    - 그외 연산
  - 조건식을 입력하지 않으면 무한 반복
```javascript
// i가 10이되면 종료
// i가 0부터 9까지 10회 구문 진행
for(let i = 0; i < 10; i++){
    console.log("repeat!!");
}
```
## B. while
- 조건식이 true일때 반복 
- 조건식이 false가 되거나 break 키워드를 만나면 반복 종료
```javascript
while (조건식) {
  반복구문
}
```
## C. do-while
- 최초 1회는 무조건 구문을 수행. 
- 1회 수행 후 조건식이 true일때 반복
- 조건식이 false가 되거나 break 키워드를 만나면 반복 종료
```javascript
do {
  반복구문
} while (조건문);
```