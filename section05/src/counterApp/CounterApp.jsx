import Viewer from "./componets/Viewer.jsx";
import {useState} from "react";
import Controller from "./componets/Controller.jsx";
import useCounterApp from "./hooks/useCounterApp.js";

const CounterApp = ()=>{
    const [formula, result, btnHandler] = useCounterApp();
    return (
        <div>
            <h1>Simple Counter</h1>
            <Viewer result={result} formula={formula}/>
            <Controller  onclickHandler ={btnHandler}/>
        </div>
    )
}
export default CounterApp;