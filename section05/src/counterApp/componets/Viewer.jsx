
const Viewer = ({result, formula})=>{
    return (
        <div>
            <h4>현재 카운트: </h4>
            <div>
                {result}
            </div>
            <div>식: {formula||"no data"}</div>
        </div>
    )
}

export default Viewer