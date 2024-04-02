import "../assets/css/Item.css";
import {memo, useContext} from "react";
import { TodoDispatchContext} from "../App.jsx";

const Item = ({id,isDone,content,date})=>{
    const { updateTodo, deleteTodo } = useContext(TodoDispatchContext);

    const onChangeCheckbox =()=>{
        updateTodo(id);
    }
    const onDeleteBtn =()=>{
        deleteTodo(id);
    }
    return (
        <div className={`TodoItem ${isDone?"done":"yet"}`}>
            <input onChange={onChangeCheckbox} type="checkbox" checked={isDone}/>
            <div className="item_content">{content}</div>
            <div className="item_date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onDeleteBtn}>삭제</button>
        </div>
    );
}
// export default memo(Item,(prevProps,nextProps)=>{
//     //return true => 같다 => 값 변화가 없다 => 리랜더링 하지 않는다
//     //return false => 다르다 => 값이 변했다 => 리랜더링 한다
//     if(prevProps.id!==nextProps.id) return false;
//     if(prevProps.content!==nextProps.content) return false;
//     if(prevProps.isDone!==nextProps.isDone) return false;
//     if(prevProps.date!==nextProps.date) return false;
//     return true;
// });
export default memo(Item);