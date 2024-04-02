

# I. 최적화?
- 서비스의 성능을 향상시키는 방법
- react에서의 최적화: 컴포넌트 리랜더로 인해 발생하는 불필요한 것들 제거
  - 컴포넌트 내부의 연산
  - 컴포넌트 내부의 함수 생성
  - 컴포넌트 자체의 리랜더링

# II. 동일 연산 방지하기
- useMemo: Memoization 처리하는 훅
  - 결과값을 저장해놓고 같은 결과라면 연산하지않고 저장된 값을 전달
  - [test code](../section08/src/components/List.jsx)
- 매번 연산 진행
```jsx
    const getAnalyzedData = ()=>{
        console.log("getAnalyzedData fnc 연산");
        const totalCount = todos.length;
        const doneCount = todos.filter(todo=>todo.isDone).length;
        const notDoneCount = totalCount-doneCount;
        return {totalCount,doneCount,notDoneCount};
    };
    const {totalCount, doneCount, notDoneCount}=getAnalyzedData();
```
- 특정 값 변경시에만 연산진행하도록 useMemo 적용
  - `useMemo(callbackFnc, deps)`
```jsx
useMemo(()=>{},[]);
```
- deps에서 지정한 대상의 변경이 감지될때만 처리
  - 컴포넌트의 다른 state 변경에 연산진행 안함
- 함수에 적용
```jsx
const {totalCount, doneCount, notDoneCount} = 
  useMemo(()=>{
    console.log("getAnalyzedData fnc 연산");
    const totalCount = todos.length;
    const doneCount = todos.filter(todo=>todo.isDone).length;
    const notDoneCount = totalCount-doneCount;
    return {totalCount,doneCount,notDoneCount};
  },[todos]);
```
# III. 불필요한 리랜더링 방지하기
- 원인: 부모 컴포넌트에서 현재 컴포넌트와 관련 없는(이 컴포넌트의 props 관련이 아닌) 변동사항에 의해 리랜더링 하는 경우
-  Highlight updates when components render: 리액트 devtool 설정
  - 랜더링이 진행되는 컴포넌트를 표시
- 다른 섹션의 데이터가 변경되었을때 변경사항이 없는 header 컴포넌트가 리랜더링 됨
  - [test code](../section08/src/components/Item.jsx)
- 원본
```jsx
const Header = ()=> {
    return (
        <div className={"headerContainer"}>
            <h3>오늘은 📆</h3>
            <h1>{
                new Date().toLocaleDateString(
                    "ko",
                    {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                )
            }</h1>
        </div>
    );
}
```
- React.memo 적용
  - 컴포넌트 전체에 씌우기
```jsx
const Header = memo( ()=>{
  return (
          <div className={"headerContainer"}>
            <h3>오늘은 📆</h3>
            <h1>{
              new Date().toLocaleDateString(
                      "ko",
                      {
                        weekday:"long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      }
              )
            }</h1>
          </div>
  );
});
```
  - 컴포넌트 결과를 memo로 적용해 전달하기
```jsx
const memoizedHeader = memo(Header);
export default memoizedHeader;
```
  - 바로 밖으로 보내기
```jsx
export default memo(Header);
```
- memo() 커스텀하기
  - memo는 컴포넌트의 이전결과와 현재 결과를 비교해 랜더링을 판단. 
  - 다만 그 비교 기준이 얕은 비교를 진행하기때문에 리터럴이 아닌 참조값은 문제가 생긴다
  - 함수는 재생성되면 메모리 주소가 매번 바뀌기 때문에 얕은 비교를 하게되면 결국 계속 값 변화로 인식
  - 이를 위해 커스터마이징을 사용한다. 
  - `memo(대상 컴포넌트, 비교를 위한 콜백)`
```jsx
export default memo(Item,(prevProps,nextProps)=>{
  //return true => 같다 => 값 변화가 없다 => 리랜더링 하지 않는다
  //return false => 다르다 => 값이 변했다 => 리랜더링 한다
  if(prevProps.id!==nextProps.id) return false;
  if(prevProps.content!==nextProps.content) return false;
  if(prevProps.isDone!==nextProps.isDone) return false;
  if(prevProps.date!==nextProps.date) return false;
  return true;
});
```
- 이처럼 다른 컴포넌트를 인수로 받아 유사한 처리를 진행하는 것을 고차컴포넌트(Higher-Order-Components: HOC)라고 한다
  - [이에 대한 관련 정보](https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/)
# IV. 불필요한 함수 재생성 제외하기 
- useCallback: 함수의 불필요한 재생성 방지
  - [test code](../section08/src/App.jsx)
  - 마찬가지로 `useCallback(대상 함수, deps)`
```jsx
  const 함수이름 = useCallback(()=>{},[]);
```
- 적용
```jsx
const updateTodo=useCallback((targetId)=>{
  dispatch({
    type: TODOS_REDUCER_TYPENAMES.indexOf("UPDATE"),
    data: targetId
  });
},[]);
const deleteTodo = useCallback((targetId)=>{
  dispatch({
    type: TODOS_REDUCER_TYPENAMES.indexOf("DELETE"),
    data: targetId,
  });
},[]);
```
# V. 최적화는 언제, 무엇을?
- 기능구현이 끝나고 앱 완성이 거의다 된 시점
- 꼭 필요한 컴포넌트에만
  - 사소한 컴포넌트는 오히려 더 무거워질 수 있다.
  - 복잡한 함수 권장
- [최적화 관련 좋은 자료](https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/)