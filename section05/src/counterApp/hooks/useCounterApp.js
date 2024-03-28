import {useState} from "react";

function useCounterApp(){
    const [number, setKey] = useState(undefined);
    const [result,setResult]=useState(0);
    const [formula,setFormula] =useState("");

    const btnHandler = (number) =>{
        const isNum = parseInt(number);
        // debugger;
        if(isNaN(isNum)){
            setResult(0);
            setFormula("");
        }else{
            setKey(number);
            const operator = number >= 0 ? "+" : "-";
            setResult(result+number);

            setFormula(`${formula} ${operator} ${number>=0?number:-number}`);
        }
    }
    return [formula, result, btnHandler];
}
export default useCounterApp;