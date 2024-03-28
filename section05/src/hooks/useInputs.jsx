import {useState} from "react";

function useInputs(){
    const [input,setInput] = useState("");
    const onChangeInput = e=>{
        // 중간 처리 코드
        setInput(e.target.value);
    }
    return [input,onChangeInput];
}
export default useInputs;