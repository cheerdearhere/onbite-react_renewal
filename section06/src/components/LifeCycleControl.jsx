import {useEffect, useRef, useState} from "react";

export default function LifeCycleControl(){
    const [count, setCount] = useState(0);
    useEffect(()=>console.log({count}),[count]);
    const counterHandler =(isPositive)=>{
        setCount(isPositive?count+1:count-1);
    }


    // mount
    useEffect(() => {
        console.log("mount")
    }, []);
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
    // unmount
    useEffect(() => {
        return ()=>{// 클린 업, 정리 함수
            console.log("unmount");
        }
    }, []);
    return (
        <>
            <div>
                <h1>useEffect</h1>
                <button onClick={() => counterHandler(true)}>+</button>
                <button onClick={() => counterHandler(false)}>-</button>
            </div>
        </>
    )
}