# I. 동기와 비동기
## A. 동기란?
- 여러개의 작업을 순서대로, 하나씩 처리하는 방식
- javascript는 기본적으로 동기적으로 코드를 실행한다
```javascript
function taskA(){
    console.log(2);
}
console.log(1);
taskA();
console.log(3);
// 1
// 2 
// 3
```
- 동기 처리의 단점: 오래걸리는 작업이 섞이면 그것이 끝날때까지 이후 작업을 진행할 수 없다
  - 다른 언어들은 멀티쓰레드를 통해 한번에 여러 작업을 진행할 수 있지만 단일쓰레드만 사용하는 javascript는  그것이 안된다. 
- javascript의 해결책: 비동기
  - 하나의 쓰레드지만 작업을 동시에 처리
  - 자바스크립트 쓰레드가 아닌 브라우저에 탑재된 Web APIs에 넘김
  - 각 작업이 종료되고 난뒤의 절차는 callback으로 처리
```javascript
//동기
console.log(1);//1. 1 출력
//2. setTimeout이 Web APIs에 콜백과 함께 넘김
// 시간 측정 시작
setTimeout(()=>{
    console.log(2);
},3000);
console.log(3);//3. 3 출력
// 4. 설정한 시간(3000ms)이 지나면 콜백 진행
```
# II. 콜백 함수
- 내부에 콜백함수를 지정하는 경우
```javascript
function add(a,b){
    setTimeout(()=>{
        const sum = a + b;
        console.log(sum);
    },3000);
}

add(1,2);
```
- 외부에서 콜백을 지정하는 경우: 매개변수로 함수를 받음
```javascript
function addUseCallback(a,b,callback){
    setTimeout(()=>{
        const sum = a + b;
        callback(sum);
    },3000);
}
addUseCallback(1, 2, value=>console.log(value));
// 콜백의 인수가 하나뿐이고 따로 변형을 하지 않는경우 생략도 가능..
addUseCallback(3,4,console.log);//but 너무 축약하면 가독성을 약화시킬 수 있으므로 고려
```
- 콜백도 얕은 수준이면 편하지만...
```javascript
function orderFood(foodCode, callback){
    if(foodCode < 0 || foodCode >= foodArr.length){
        console.log("정상적인 접근이 아닙니다.");
    }
    setTimeout(()=>{
        const food = foodArr[foodCode];
        callback(food);
    }, 4000);
}
function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food.foodName}`;
        food.foodName = cooldownedFood;
        callback(food);
    },2000);
}
function freezeFood(food,callback){
    setTimeout(()=>{
        const frozenFood = `냉동된 ${food.foodName}`;
        food.foodName = frozenFood;
        callback(food);
    },1500);
}
orderFood(foodArr.findIndex(food=>food.foodName==="떡볶이"),selectedFood=>{
   console.log(`selected: ${selectedFood.foodName}`);
   cooldownFood(selectedFood,(cooldownedFood)=> {
       console.log(cooldownedFood.foodName);
       freezeFood(cooldownedFood,(frozenFood)=>{
           console.log(frozenFood.foodName);
       });
   });
});
```
- 추가되는 기능이 많아질수록 콜백이 깊어지고 가독성이 매우 안좋아질 수 있다. 
- 이것을 '콜백 지옥'이라 한다.
- 이를 해결하는 좋은 방법이 Promise 객체

# III. Promise
- 비동기 작업을 효율적으로 처리할수 있도록 도와주는 javascript built-in object
- 비동기 작업을 감싸는 객체
## A. Promise의 3가지 상태
- Pending: 대기
  - 아직 작업이 종결되지 않은 상태
- Fulfilled: 성공 => resolve
  - 비동기 작업이 성공적으로 마무리된 상태
- Rejected : 실패(에러 포함) => reject
  - 비동기 작업이 실패한 상태 
## B. 사용하기
- 비동기 작업을 실행할 함수(executor) 설정
- resolve, reject가 설정되지 않은 상태로 pending
```javascript
const promise = new Promise((resolve,reject)=>{ //executor
        setTimeout(()=>{
            console.log("안녕");
        }, 2000);
    }
);
```
- 결과를 위한 콜백 처리
```javascript
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const num = 10;
        if(typeof num === "number")
            resolve(num+10); //정상 처리
        else
            reject("숫자가 아님"); // 에러 처리
    },2000);
});

```
- promise 객체에서 값 꺼내서 사용하기
  - then: resolve에서 결과값 사용
  - catch: reject 처리
```javascript
promise
    .then((value)=>{// resolve 사용
        console.log(value);
    })
    .catch(err=>{// reject 사용
        console.log(err);
    });
```

## C. 콜백 처리하기
```javascript
function addTen(num){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof num ==="number")
                resolve(num+10);
            else
                reject(`숫자가 아닙니다: ${num}`);
        }, 2000);
    });
    return promise
}
addTen(0)
    .then(result=> {
        console.log(`result: ${result}`);
        return addTen(result);
    })
    .then(result=>{
        console.log(`result: ${result}`);
        return addTen(result);
    })
    .then(result=> {
        console.log(`result: ${result}`);
    })
    .catch(err=>console.log(err));
```

## D. async & await
- 어떤 함수 안에서 동기/비동기 처리를 표시하는 키워드
  - async {function}: 이 함수를 비동기로 처리함
  - await function(): 내부의 비동기 함수를 동기처럼 순차적으로 처리할때 사용
    - 데이터 호출, 긴 연산 등 오래걸리더라도 꼭 필요한 데이터를 받는 경우
    - async function 내부에서만 사용가능
```javascript
async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name: "홍길동",
                id: "charminghong"
            });
        },3000);
    });
}

async function printUserData(){
    // getData().then(result=>{
    //     console.log(`이름: ${result.name}, ID: ${result.id}`)
    // }).catch(console.log);
    const userData = await getData();
    console.log(`이름: ${userData.name}, ID: ${userData.id}`);
}

printUserData();
```