import {useState} from "react";

const Counter = ()=>{
    const [state,setState] = useState(0);
    const increaseFnc = ()=>{
        setState(value=>++value);
        console.log();
    }
    return (
        <>
            <div>
                <h1>{state}</h1>
                <button onClick={increaseFnc}>+</button>
                <button
                    onClick={() => {
                        setState(state - 1);
                    }}
                >
                    -
                </button>
            </div>
        </>
    );
}
export default Counter;