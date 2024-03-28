
const Viewer = ({result, formula})=>{
    return (
        <div>
            <h4>현재 카운트: </h4>
            <div>
                <h1>{result}</h1>
            </div>
            <div className={"counter_formula"}>식: {formula||"no data"}</div>
        </div>
    )
}

export default Viewer