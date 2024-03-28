
const CounterBtn = ({number, onClickHandler})=>{
    const addNum=()=>{
        onClickHandler(number);
    }
    return (
        <button
            onClick={addNum}
        >
            {number}
        </button>
    )
}
export default CounterBtn;