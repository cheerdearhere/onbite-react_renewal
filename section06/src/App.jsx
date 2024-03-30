import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import {useEffect, useRef, useState} from "react";
import useTodos from "./Entities/mockTodoList.js";
// import {initMockData, todoDB} from "./api/todoAPI.js";

function App() {
    const [mockData,todoForm] = useTodos();
    const [todos, setTodos] = useState([]);
    const idRef = useRef(mockData.length-1);

    useEffect( () => {
        setTodos(mockData);
        // await initMockData();
        // setTodos(await todoDB.getData("/api/todos"));
        // console.log(todos);
    }, []);

    const createTodo=(content)=>{
        const newTodo = {
            ...todoForm,
            id: ++idRef.current,
            content,
            date: new Date().getTime()
        }
        setTodos(prev=>[newTodo, ...prev])
    }

    const updateTodo=(targetId)=>{
        setTodos(
            todos.map(todo=>todo.id === targetId
                ? {...todo, isDone:!todo.isDone}
                : todo
            )
        );
    }
    const deleteTodo = (targetId)=>{
        setTodos(todos.filter(todo=>todo.id!==targetId));
    }
    return (
        <div className="App">
            <Header/>
            <Editor onCreate={createTodo}/>
            <List
                todos={todos}
                onUpdate={updateTodo}
                onDelete={deleteTodo}
            />
            <Footer/>
        </div>
    )
}

export default App
