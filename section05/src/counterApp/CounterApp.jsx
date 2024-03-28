import "./assets/css/CounterAppCSS.css";

import Viewer from "./componets/Viewer.jsx";
import Controller from "./componets/Controller.jsx";
import useCounterApp from "./hooks/useCounterApp.js";

const CounterApp = ()=>{
    const [formula, result, btnHandler] = useCounterApp();
    return (
        <div className="counter_app">
            <h1>Simple Counter</h1>
            <section>
                <Viewer result={result} formula={formula}/>
            </section>
            <section>
                <Controller  onclickHandler ={btnHandler}/>
            </section>
        </div>
    )
}
export default CounterApp;