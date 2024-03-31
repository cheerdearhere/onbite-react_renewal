import LifeCycleControl from "./LifeCycleControl.jsx";
import ReducerCounter from "./ReducerCounter.jsx";

export default function Footer(){
    return (
        <div className={"footerContainer"}>
            <h5>react jsx</h5>
            {/*<LifeCycleControl/>*/}
            <ReducerCounter/>
        </div>
    );
}