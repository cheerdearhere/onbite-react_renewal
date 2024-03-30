import "../assets/css/Item.css";

const Item = ({id,isDone,content,date,onUpdate,onDelete})=>{
    const onChangeCheckbox =()=>{
        onUpdate(id);
    }
    const onDeleteBtn =()=>{
        onDelete(id);
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
export default Item;