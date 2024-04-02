import {useReducer, useRef} from "react";

function reducer (state,{type,data}){
    const actions= [
        {
            key: "INCREASE",
            action: ()=>{
                return state + data;
            },
        },
        {
            key: "DECREASE",
            action: ()=>{
                return state - data;
            },
        },
        {
            key: "MULTIPLY",
            action: ()=>{
                return state * data;
            },
        },
        {
            key: "DIVIDE",
            action: ()=>{
                return state / data;
            },
        },
        {
            key: "MODULUS",
            action: ()=>{
                return state % data;
            },
        },
        {
            key: "SET_ZERO",
            action: ()=>{
                return 0;
            },
        },
    ];
    if(type<0 || type>=actions.length) return state;

    return actions[type].action();
}

const ReducerCounter = ()=>{
    const inputRef =useRef();
    const [state,dispatch] = useReducer(reducer,0);
    const counterHandler = (type)=>{
        const data = parseInt(inputRef.current.value);

        if(type===5) dispatch({type,data:0});
        if(isNaN(data) || typeof data !== "number") return state;

        dispatch({
            type: type,
            data,
        });

        inputRef.current.value="";
    }
    return (
        <div>
            <div>{state}</div>
            <input ref={inputRef} type="number"/>
            <button
                onClick={()=>{
                    counterHandler(0);
                }}>
                +
            </button>
            <button
                onClick={()=>{
                    counterHandler(1);
                }}>
                -
            </button>
            <button
                onClick={()=>{
                    counterHandler(2);
                }}>
                x
            </button>
            <button
                onClick={()=>{
                    counterHandler(3);
                }}>
                /
            </button>
            <button onClick={()=>{
                counterHandler(4);
            }}>
                %
            </button>
            <button
                onClick={()=>{
                    counterHandler(5);
                }}
            >
                0
            </button>
        </div>
    );
}
export default ReducerCounter;