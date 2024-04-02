

# I. 페이지 라우팅이란? 
- 요청에 따라 다른 페이지를 전달하는 기능
- 페이지를 구현하는 방식
  - SSR vs CSR
    - SSR(Server Side Rendering): 특정한 요청이 전달되면 서버가 html 파일을 생성해 전달하고 클라이언트가 그것을 처리함
      - 페이지 파일을 전달(html)
      - 서버 하중 높음
      - 제어,보안 중심
    - CSR(Client Side Rendering): 특정한 요청이 전달되면 서버는 데이터(json)를 전달하고 그것에 맞게 클라이언트에서 페이지를 생성
      - 사용자의 반응이 빠름
      - 속도 중심
  - MPA vs SPA
    - MPA(Multi Page Application): 여러개의 페이지를 요청에 따라 따로 전달 
      - index.html 하나만 전달하고 나머지는 번들 js 파일을 변경시켜 처리
      - 번들파일은 vite가 번들링
      - 다른 페이지 이동시 속도가 느림
    - SPA(Single Page Application): 하나의 페이지 내에서 데이터 변경으로 다른 페이지를 생성
      - 속도가 빠름
      - 하나의 디자인이 유지되므로 이에대한 고려 필요
# II. 라우팅 설정하기
- 사용할 라이브러리: React Router
- dependency
  - ` npm i react-router-dom`
- `main.jsx`에서 라우터용 컴포넌트 지정하기
  - navigation, location을 통해 현재 페이지 정보를 사용할 수 있음
```jsx
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```
- `App.jsx`에서 페이지 나누기
- page를 담당할 컴포넌트 우선 준비
```jsx
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import Diary from "./pages/Diary.jsx";

function App() {
    return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/new" element={<New/>}></Route>
        <Route path="/diary" element={<Diary/>}></Route>
        // 위의 요청 경로(path)외의 모든 요청에 보여줄 화면
        <Route path="*" element={<NotFound/>}></Route>
    </Routes>
    )
}
```
- 주의사항
  - `<Routes>` 태그 내에는 `<Route>` 태그만 가능
  - `<Routes>` 태그 외부에 일반 태그를 사용할 수 있음
    - header, sideBar, footer 등 다양한 기능 사용 가능
# III. 페이지 이동
- 화면에서 url 직접 접근하도록하기
  - Link: html의 a 태그 대체
    - a 태그를 사용하면 페이지 전체가 호출되어 SPA가 아니게됨
```jsx
function App() {
  return (
          <>
            <div>
              <Link to={"/"}>Home</Link>
              <Link to={"/new"}>New</Link>
              <Link to={"/diary"}>Diary</Link>
            </div>
            <Routes>
    //...
```
  - eventListener 사용하기
```jsx
const navigate = useNavigate();
const onClickNewBtn=()=>{
  navigate("/new");
}
//...
<button onClick={onClickNewBtn}>go to New page</button>
```
# IV. 동적 경로
- list의 item을 선택하면 각 item의 상세 페이지로 가는 등 값을 다이나믹하게 사용할 경우
- 처리 방식
  - URL Parameter : `...url/{param}`
    - id 등 변경되지 않는 값 사용
  - Query String: `...url?{key}={value}`
    - 사용자 입력에 의해 변경될 경우 사용
## A. URL Parameter 사용
- 다이어리의 상세페이지: 등록된 다이어리의 sequence 값(id) 사용 > URL Parameter
```jsx
  <Route path="/diary/:id" element={<Diary/>}></Route>
```
  - 해당 페이지에서 Parameter의 값 사용하기
```jsx
const {id} = useParams();
return (
        <div>
          {id}. Diary
        </div>
)
```
## B. Query String 사용
- router에서는 별도 처리 x
  - `~/new?keyString=111`
```jsx
    const [params, setParams] = useSearchParams();
    console.log(params.get("keyString"));
```
