


# I. State
[실습 코드](../section05/src/components/StateComponent.jsx)
- 동적으로 처리할 여러 상태를 관리. 
- react component에서 state에 따라 리랜더링을 시행시킴
## A. 사용하기위한 import
```jsx
import {useState} from "react";
```
## B. 선언
```jsx
//     상태    상태변경함수            기본값
const [state, setState] = useState('initValue');
```
## C. 이벤트 리스너에 연결하기
```jsx
return (
    <>
        <h1> {state} </h1>
        <button
            onClick={()=>{
                setState(state+1);
            }}
        >
            +
        </button>
    </>
)
```
## D. toggle로 사용하기
- 그냥 flag로 사용할때는 boolean이나 number를 사용하는 것도 유용
```jsx
    <h1>system: {light}</h1>
    <button
        onClick={()=>{
            setLight(light === "ON" ? "OFF":"ON");
        }}
        style={{
            background: light==="ON"?"#fff":"#000",
            color: light==="ON"?"#000":"#FFF"
        }}
    >
        전구 {light==="ON"?"켜기":"끄기"}
    </button>
```
## E. props와 state
- props로 받아서 state 적용
```jsx
const Bulb = (props)=>{
    const {light} = props;
    console.log("bulb!!!");// re-render check
    return (
        <div>
            {
                light==="ON"
                ?<h1 style={{background:"orange"}}>ON lamp</h1>
                :<h1 style={{background:"gray"}}>OFF...</h1>
            }
        </div>
    )
}
//...

<Bulb light={light}></Bulb>
```
- 리엑트에서 리-랜더가 발생하는 원인 
  - 자신의 state 변경
  - 제공받는 props 변경
  - 부모 컴포넌트의 state 변경(자신과 관계 없는 state라도)
- 서로 관계없는 state는 분리해주는 것이 좋음
  - 부모를 공유하는 경우 다른 컴포넌트도 리랜더 되는 것을 방지
```jsx
const StateComponent = ()=>{
    //useState는 각 컴포넌트에서 정리
    return (
        <>
            <Bulb/>
            <Counter/>
        </>
    );
}
```
## F. 사용자 입력 관리
### 1. input(text, date)
- state로 관리
- 이벤트리스너 함수로 변경 감지
- input tag의 value에 값 변경 반영
```jsx
const [name, setName] = useState("");// 1. state

<input 
    placeholder="name" 
    // 2. event listener - function
    onChange={e=>setName(e.target.value)} 
    // update state value
    value={name}
/>
<br/>
{name}
```
### 2. select box
- list를 사용해 편하게 사용
```jsx
const [nation, setNation] = useState("");
const nationList = ["한국","미국","영국"];
```
```jsx
    <select
        value={nation}
        onChange={onChangeNation}
    >
        <option value="">선택</option>
        {nationList.map(nationOpt=>{
            return <option key={nationOpt+1}>{nationOpt}</option>
        })}
    </select>
```
- 필요에 따라 value와 name 등 다양한 옵션을 사용하기도 함.
  - tag의 value는 서버로 전달할 값
  - tag의 content(<>content</>)는 사용자에게 보여줄 값
### 3. textarea
- input과 같음
```jsx
    <textarea
        value={introducingText}
        onChange={onChangeIntroducingText}
    />
```
### 4. 여러 입력을 하나의 state에서 관리하기
#### a. state를 합쳐 obj로 관리하기
```jsx
const [user, setUser] = useState({
  name:"",
  birth:"",
  nation:"",
  introducingText:"",
});
```
#### b. 입력 태그들의 name을 key로 변경
```jsx
  <div>
      <input
          name="name"
          //...
      />
  </div>
  <div>
      <input
          name="birth"
          //...
      />
  </div>
  <div>
      <select
          name="birth"
          //...
      >
              //...
  </div>
  <div>
      <textarea
          name="introducingText"
          //...
      />
  </div>
```
#### c. 이벤트 리스너 함수 합치기(선택)
```jsx
const onChangeUser=e=>{
  const {name, value} = e.target;
  setUser({
    ...user,
    [name]:value,
  });
};
```
- 만약 따로 처리할 것이 있다면(ex) nation)
```jsx
const onChangeNation =e=>{
    setUser({
      ...user,//다른 값 복사
      nation: e.target.value,// 변경 적용
    });
}
```
#### d. jsx tag에 변경사항(value, onChange) 반영하기
```jsx
  <input
        name="name"
        placeholder="name"
        onChange={onChangeUser}
        value={user.name}
    />
    <br/>
    {user.name}
```
# II. Ref

# 