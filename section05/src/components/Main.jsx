import "../Main.css"
import Button from "./Button.jsx";

const JSXBasic = ()=>{
    const number = 10;
    const object = {
        name: "홍길동"
    };
    return (
        <>
            <h1>I'm main</h1>
            <h2 className="main_container">num: {number*2}</h2>
            <h3>{number % 2 === 1 ? "홀수 입니다": "짝수 입니다"}</h3>
            {[1,2,3]}
            {true}
            {null}
            {undefined}
            {/*{object}*/}
            {object.name}
        </>
    );
};
const Main = ()=>{
    return (
        <main>
            {/*<JSXBasic/>*/}
            <Button text={"메일"} color={"red"}/>
            <Button text={"카페"} color={"blue"}/>
            <Button text={"검색"}/>
            <Button text="태그">
                <h3>html</h3>
                <JSXBasic/>
            </Button>
        </main>
    );
};
export default Main;
export {
    JSXBasic,
}