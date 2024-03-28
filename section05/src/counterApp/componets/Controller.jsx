import CounterBtn from "./CounterBtn.jsx";

const Controller = ({onclickHandler}) =>{
    const btnDataList = [-100,-10,-1,"초기화",1,10,100];
    return (
        <>
            {btnDataList.map(btnData=>{
                return <CounterBtn
                    key={btnData}
                    number={btnData}
                    onClickHandler= {onclickHandler}
                />

            })}
        </>
    )
}
export default Controller