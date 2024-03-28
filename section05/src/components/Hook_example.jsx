import {useState} from "react";
import useInputs from "../hooks/useInputs.jsx";
// const globalState = useState("error");

// hooks로 이동
// function useInput(){
//     const [input,setInput] = useState("");
//     const onChangeInput = e=>{
//         // 중간 처리 코드
//         setInput(e.target.value);
//     }
//     return [input,onChangeInput];
// }

const Hook_example = ()=>{
    const [state, setState] = useState(0);
    // if(state > 0)
    //      const conditionState = useState(32);
    // for(let i = 0;i<10;i++)
    //     const iterateState = useState(i);
    const [input, onChangeInput] = useInputs();
    return <h1>hook example</h1>
}
export default Hook_example;