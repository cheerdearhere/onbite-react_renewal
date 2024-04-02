import "../assets/css/List.css";
import Item from "./Item.jsx";
import {useMemo, useState} from "react";
const List = ({todos, onUpdate, onDelete})=>{
    const [search,setSearch] = useState("");
    const onSearch = (e)=>{
        setSearch(e.target.value);
    }
    const getFilteredData=()=>{
        // debugger;
        if(search === ""||search.trim()==="")
            return todos;
        else
            return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
    }
    let filteredList  = getFilteredData();
    // test useMemo hook
    // const getAnalyzedData = ()=>{
    //     console.log("getAnalyzedData fnc 연산");
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter(todo=>todo.isDone).length;
    //     const notDoneCount = totalCount-doneCount;
    //     return {totalCount,doneCount,notDoneCount};
    // };
    // const {totalCount, doneCount, notDoneCount}=getAnalyzedData();
    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
            console.log("getAnalyzedData fnc 연산");
            const totalCount = todos.length;
            const doneCount = todos.filter(todo=>todo.isDone).length;
            const notDoneCount = totalCount-doneCount;
            return {totalCount,doneCount,notDoneCount};
    },[todos]);

    return (
        <div className={"listContainer"}>
            <h4>Todo List</h4>
            <div className={"analyze_container"}>
                <div>total: {totalCount}</div>
                <div>already: {doneCount}</div>
                <div>yet: {notDoneCount}</div>
            </div>
            <input
                onChange={onSearch}
                placeholder="검색어를 입력하세요"
            />
            <div className="todos_wrapper">
                {filteredList?.map((item)=>{
                    return (
                        <Item
                            key={`todo${item.id}`}
                            {...item}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default List;

