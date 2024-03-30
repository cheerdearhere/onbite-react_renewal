import "../assets/css/List.css";
import Item from "./Item.jsx";
import {useState} from "react";
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
    return (
        <div className={"listContainer"}>
            <h4>Todo List</h4>
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

