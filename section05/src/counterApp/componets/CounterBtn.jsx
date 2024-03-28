
const CounterBtn = ({number, onClickHandler})=>{
    const addNum=()=>{
        onClickHandler(number);
    }
    return (
        <button className="counter_btn"
            onClick={addNum}
        >
            {number}
        </button>
    )
}
export default CounterBtn;