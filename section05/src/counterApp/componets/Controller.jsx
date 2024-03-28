import CounterBtn from "./CounterBtn.jsx";

const Controller = ({onclickHandler}) =>{
    const btnDataList = [-100,-10,-1,"초기화",1,10,100];
    return (
        <div className={"counter_btn_container"}>
            {btnDataList.map(btnData=>{
                return <CounterBtn
                    key={`controllerBtn_${btnData}`}
                    number={btnData}
                    onClickHandler= {onclickHandler}
                />
            })}
        </div>
    )
}
export default Controller