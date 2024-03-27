import {useState} from "react";
import Bulb from "./Bulb.jsx";
import Counter from "./Counter.jsx";
import Register from "./Register.jsx";
import Register_re from "./Register_re.jsx";


const StateComponent = ()=>{
    return (
        <>
            <Register_re/>
            <Register/>
            <Bulb/>
            <Counter/>
        </>
    );
}
export default StateComponent;