
[실습코드](../section06/src/components/LifeCycleControl.jsx)
---

# I. 라이프 사이클
- component의 생애주기
  - Mount : 컴포넌트가 처음 생성
  - Update : 컴포넌트에 변경사항이 적용됨
  - UnMount : 컴포넌트가 제거됨
- 각 컴포넌트 생애 주기에 개입해서 작업 가능

# II. useEffect
- side effect: 어떤 동작에 따라 파생되는 여러 효과
  - useEffect를 사용해 컴포넌트 생애주기 발생시 효과를 처리할 수 있음
- useEffect(`callbackFunction`,`dependency Array`)
  - 콜백: 체크 대상이 변경되면 수행할 함수
    - state 값은 비동기로 처리되기때문에 컴포넌트 처리과정 중 마지막으로 처리되기 때문에 원하는 처리가 되지 않을 수 있다. 이를 위해 useEffect로 적용하는게 편함
  - 업데이트 플래그: 업데이트를 체크할 대상(주로 state)
```jsx
import {useEffect} from "react";
    //count를 주시
    useEffect(()=>{
      console.log({count});
      //deps(dependency array)
    },[count]);
```
# III. life cycle handling
- mount 시점
  - deps를 빈 배열로 
```jsx
    // mount
useEffect(() => {
  console.log("mount");
}, []);
```
- update 시점
  - 컴포넌트 대상이므로 dependency array를 안적는다
  - 다만 따로 처리를 안하면 mount 시점도 포함됨
```jsx
useEffect(() => {
    console.log("mount and update");
});
```
- only update
  - mount를 제외하고 update만 체크하고 싶다면 ref 객체로 mount 시점을 제외시킨다
```jsx
// update
const isMount = useRef(false);
useEffect(() => {
  //mount 때는 제외하고 update만 체크하고 싶을때
  if(!isMount.current){
    isMount.current = true;
    return;
  }
  console.log("update");
});
```
- unmount
  - useEffect의 return에 다른 익명함수를 넣어 unmount 시점에서 처리할 동작을 작성한다
  - 이때 return 함수를 클린업, 정리 함수라한다
```jsx
// unmount
useEffect(() => {
  return ()=>{
    console.log("unmount");
  }
}, []);
```

- [react 개발자 도구](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
  - state 관리, 크롬 작업자 도구 관련 기능, 리랜더링 추적 가능


# IV. 실습 프로젝트: [todo 앱](../section06)

# V. [useReducer](../section07)
## A. useReducer
- useReducer : 컴포넌트 내부에서 새로운 State를 생성하는 hook
- useState 대체 가능(거의 유사)
- state와 그와 관련된 함수를 컴포넌트와 분리할 수 있음
  - 컴포넌트는 랜더링을 주목적으로 사용하고 상태관리를 분리하면 편리함
- react의 library
```jsx
import {useReducer} from 'react';
```
- 호출
  - state: 상태 값
  - dispatch: 상태변화 감지 함수
  - reducer: 상태 변화를 진행할 함수
  - initValue: 초기값
```jsx
const [state, dispatch] = useReducer(reducer, initValue);
```
- dispatch function 사용
```jsx
const increaseHandler = ()=>{
  // 상태변화 감지함수(dispatch)에 변동 정보(acrtion object) 전달
  dispatch({
    type: "INCREASE",
    data: 1,
  });
}
```
- 상태변환 함수(reducer) 작성하기
  - 변환기(reducer)의 return 값이 state 
  - 주로 switch-case 사용
```jsx
function reducer (state,action){
    const {type, data} = action;
    switch(type){
      case "INCREASE":
          return state + data;
      case "DECREASE":
          return state - data;
    }
}
```
## B. todo 앱에 이어서 적용
