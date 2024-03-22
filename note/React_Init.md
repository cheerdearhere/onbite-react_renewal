

[실습코드](../section05)
# I. React 개요
- 특징
  - 컴포넌트 기반 구성
    - 페이지의 각 요소를 다른 파일로 모듈화시켜 컴포넌트로 사용할 수 있다.
  - 화면 업데이트 구현이 쉽다
    - 선언형 프로그래밍: 과정은 생략하고 목적만 간결히 명시
      - 내부 코드를 자세히 알 필요 없이 모듈 호출로 간단하게 처리
      - \<-> 명령형 프로그래밍
  - 화면 업데이트 처리가 빠르다
    - Virtual DOM을 사용하기때문에 전체 DOM을 처리하는 과정을 줄일 수 있다.
      - Render Tree : DOM(HTML)과 CSSOM(CSS)의 구조 정리(청사진)
      - Layout : element 배치를 잡는 작업
      - Painting : 실제로 화면에 표현
    - javascript가 실제 DOM을 처리하게되면 reflow(re-layout), repaint(re-painting)으로 인해 많은 자원을 소모(오래걸림)
      - 지연시간이 길어질 수록 브라우저는 마비됨 
- DOM을 매번 처리: 3000번 
```javascript
function addList(){
    const $ul = document.getElementById("ul");
    for(let i = 0; i<3000; i++)
        $ul.innerHTML=`<li>${i}</li>`;
}
```
- 변경사항을 정리해 한번만 처리
```javascript
function addList(){
    const $ul = document.getElementById("ul");
    let list = "";
    for(let i = 0; i<3000; i++)
        list+=`<li>${i}</li>`;
    $ul.innerHTML=list;
}
```
- React는 변경사항을 모았다가 한번에 수정하도록 자동화
  - virtual DOM에서 임시 반영 후 한번에 DOM 수정 

# II. React App 생성해보기
- Vite: react app 생성을 돕는 도구
```dockerfile
npm create vite@latest
```
- package.json으로 버전 확인: 아직 설치 안된 상태
- react app 프로젝트 directory에서 `npm i`로 설치
  - dependencies에 적힌 라이브러리 node_modules에 설치
## A. 기본 구조
- React App Directory
  - node_modules : node mode manager(npm)가 관리하는 라이브러리 공간
  - public directory : 아이콘 이미지 등 static 파일들 모음. 클라이언트에서 접근 가능
  - src directory : javascript 코드들, 실행관련 파일 모음
    - assets: public처럼 static 파일모음이지만 외부에서 접근이 어려워 보안이 필요한 경우 사용 
  - .eslintrc.cjs : java interface.java처럼 프로젝트 내에서 지킬 규약을 지정한 파일
  - .gitignore : git 공유시 제외할 대상 지정
  - index.html : `/src/main.jsx`에서 모인 virtual DOM 변경사항이 실제 돔에 반영되는 곳.
  - package.json
  - package-lock.json
  - README.md : 프로젝트와 관련된 설명이 적힌 곳. github 등 버전관리에서 안내문으로 사용됨
  - vite.config.js : react app을 생성할때 사용한 vite 설정들이 저장된 곳
## B. 실행시켜보기
- package.json에서 script 살펴보기
```json5
{
  //...
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  //...
}
```
- dev를 실행시키면 vite를 실행
> npm run dev

- 콘솔 화면
```dockerfile
  VITE v5.1.6  ready in 172 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
h

  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit
```

# III. 구동원리 
- React 내부에는 Web server가 있고 주소(host:port)를 통해 접속
  - http://localhost:5173/
    - protocol(http://)
    - localhost(IP, 도메인 주소)
    - :port(:5173)
- index.html 에서 src/main.jsx를 호출
```html
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
```
- main.jsx에서 App.jsx를 호출
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode> // es6 strict mode
          <App />// 컴포넌트 호출방식
        </React.StrictMode>,
)
```
- App.jsx 화면 출력하는 컴포넌트
  - 일반적으로 작업할때 최상위 컴포넌트로 사용 
```javascript
function App() {
  const [count, setCount] = useState(0)

  return (
          <>
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
  )
}

export default App
```

# IV. 실습시 프로젝트 준비하기
- create react app with vite
> npm create vite@latest
- dependencies update
> npm i
- 쓰지 않는 static file 삭제
  - public/vite.svg
  - src/asset/react.svg
- 삭제한 파일이 사용되던 부분 제거
  - index.html
```html
       <link rel="icon" type="image/svg+xml" href="/vite.svg" />
```
  - App.jsx
```javascript
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
```
- App.jsx에서 사용하지 않는 부분들 삭제하기
  - 일단 기본형으로 아래처럼 비운다
```javascript
import './App.css'

function App() {
  return (
    <>
      
    </>
  )
}

export default App
```
- src/App.css에서 기본 css 삭제
- react strict mode 해제
  -  src/main.jsx
```javascript
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
```
- .eslintrc.cjs 편집
  - 학습용으로 사용 
  - 필요에따라 적용
```javascript
{
  //...
  rules: {
    'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  // customizing
    // 사용하지 않는 변수들 제거하도록 경고하는 기능
    "no-unused-vars": "off", 
    // prop으로 전달하는 데이터의 type 체크하는 기능
    "react/prop-types": "off",
  },
}
```

# V. Component
- JSX를 반환하는 함수: 컴포넌트 이름 첫 문자는 Upper class
## A. 선언
  - 함수 선언식
```javascript
function Hello(props){
    const {color, name, isSpecial} = props;
    return (
        <div style={{color}}>
          {isSpecial && <b>*</b>}
          안녕하세요 {name}
        </div>
    )
}
```
  - 화살표 함수
```javascript
const Hello=({color, name, isSpecial})=>{
    return (
            <div style={{color}}>
              {isSpecial && <b>*</b>}
              안녕하세요 {name}
            </div>
    )
}
```
  - class 이용(거의 사용 x)
```javascript
class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}
```
## B. 호출
- 외부 컴포넌트 내에 JSX 태그로 호출
```javascript
function App() { //부모 컴포넌트
  return (
          <>
            <Header/> // 자식 컴포넌트
            <h1>Default Module for studying React!!</h1>
          </>
  );
};
```
- 보통 root component(최상위 컴포넌트)는 App을 사용

# VI. JSX
- 원래 javascript는 html을 반환할 수 없음
- 이를 위한 js의 확장: jsx
## A. javascript 기능 사용하기
- 반환하는 jsx 내에서 {}안에서는 javascript문으로 사용
- 숫자, 문자, 배열만 표시 (boolean, undefined 등은 표시안됨)
- 모든 태그는 닫혀있어야 한다
  - 열린 태그: `</>`
  - 닫힌 태그: `<></>`
- 최상위 태그는 하나여야한다.(return 뒤에오는 태그) 
  - 최상위 태그를 지정하지 않을 것이라면 빈태그(`<></>)라도 사용
```javascript
const Main = ()=>{
    const number = 10;
    const object = {
      name: "홍길동"  
    };
    return (
        <main>
          {
            // 연산, 삼항연산, 맥락검사 등 사용가능
          }
            <h2>num: {number*2}</h2>
            <h3>{number % 2 === 1 ? "홀수 입니다": "짝수 입니다"}</h3>
          {[1,2,3]}
          {true}
          {null}
          {undefined}
          {
              //object 특히 객체는 에러를 발생시킨다. 
          }
          {object.name}// object.key로 호출
        </main>
    );
};
```
## B. 스타일 지정
### 1. inline style
- Object를 사용해 style을 구성
  - css에서 사용하는 Kebab-case를 CamelCase로 사용
```jsx
<div
    style={{
        backgroundColor: "red",
        borderBottom: "5px solid blue",
    }}
>
</div>
```
### 2. outline style
- 대상을 className으로 지정
- CSS파일을 사용해서 import하기
```jsx
import "./Main.css";
//...
<div className="user_container">
</div>
```

# VII. props
- props는 단방향. 부모에서 자식으로만 전달가능하다. 
- 전역에서 관리할 경우 Context나 관련 라이브러리의 도움이 필요하다
  - redux/ recoil 등
- 같은 기능을 담당하는 여러 컴포넌트가 있을때 하나의 컴포넌트를 만들고 그것의 properties로 조절해 사용
- props는 obj의 형태
```jsx
const Button = (props)=>{
    const {text} = props;
    return (
        <button>{text}</button>
    );
}
```
- 부모 컴포넌트에서 props의 요소를 전달
```jsx
        <main>
  {/*<JSXBasic/>*/}
  <Button text={"메일"}/>
  <Button text={"카페"}/>
  <Button text={"블로그"}/>
</main>
```
- props가 필수로 전달되지 않을 경우 대피는 필수
```jsx
const Main = ()=>{
  return (
          <main>
            {/*<JSXBasic/>*/}
            <Button text={"메일"} color={"red"}/>
            <Button text={"카페"} color={"blue"}/>
            <Button text={"검색"}/>
          </main>
  );
};
```
```jsx
const Button = ({text, color})=>{
    return (
        <button
            style={{color}}
        >
            {text}
        </button>
    );
}
//default 사용
Button.defaultProps ={
    color: "black"
};
```
- 객체와 관련된 여러 함수를 사용하면 편리

```jsx
const buttonProps = {
  text: "메일",
  color: "red",
  init: 3,
  //...
}
return (
        <Button {...buttonProps}/>
)
```
```jsx
const Button = ({text, color, init})=>{
    //,,,
}
```
- child element(html tag, jsx component)도 전달 가능
```jsx
const Button = ({text, color, children})=>{
  //,,,
  {children}
}
```

```jsx

<Button text="태그">
  <h3>html</h3>
  <Header/>
</Button>
```
# IIX. Event Handling
- inline: 직접 리스너에 반응할 콜백 작성하기
```jsx
        <button
        style={{color}}
        onClick={()=>{
          console.log(text);
        }}
>
```
- 컴포넌트 내부에 함수선언하고 콜백으로 연결하기
  - 콜백과 마찬가지로 ()를 사용하면 함수의 결과undefined만 가져오므로 주의 
```jsx
    const handlerClickBtn = ()=>{
        console.log(text);
    }
    return (
        <button
            style={{color}}
            onClick={handlerClickBtn}
        >
        </button>
    );
```
- event object: SyntheticBaseEvent(합성 이벤트 객체) 
  - 여러 브라우저의 이벤트 객체가 다 달라지면 문제가 많으므로 이를 통일된 규격으로 통일시켜줌
  - 브라우저 종류를 생각하지 않아도 된다는 장점
  - 이벤트와 관련된 정보를 제공
```jsx
    const handlerClickBtn = (e)=>{
        console.log(e);//SyntheticBaseEvent
    }
```