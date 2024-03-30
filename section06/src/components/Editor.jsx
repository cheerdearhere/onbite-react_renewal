import "../assets/css/Editor.css";
import {useRef, useState} from "react";
const Editor = ({onCreate}) =>{
    const [content, setContent] = useState("");
    const contentRef = useRef();
    const onContentHandler = e=>{
        setContent(e.target.value);
    }
    const onKeyDown=e=>{
        // console.log(e.key);
        if(e.key==="Enter") onSubmit();
    }
    const onSubmit=()=>{
        if(content===""||content.trim()==="") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    return (
        <div className={"editorContainer"}>
            <input
                ref={contentRef}
                value={content}
                onChange={onContentHandler}
                onKeyDown={onKeyDown}
                placeholder="새로운 TODO..."
            />
            <button
                onClick={onSubmit}
            >
                추가
            </button>
        </div>
    );
}
export default Editor;