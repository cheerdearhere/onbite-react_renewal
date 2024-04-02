import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import {createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState} from "react";
import useTodos from "./Entities/mockTodoList.js";

function reducer(state, {type, data}){
    const todoFnc = [
        {
            typeName: "INITIATE",
            actionFnc: ()=>{
                return data;
            }
        },
        {
            typeName: "CREATE",
            actionFnc: ()=>{
                return [
                    data,
                    ...state,
                ];
            },
        },
        {
            typeName: "UPDATE",
            actionFnc: ()=>{
                return state.map(todo=>todo.id === data
                    ? {...todo, isDone:!todo.isDone}
                    : todo
                );
            },
        },
        {
            typeName: "DELETE",
            actionFnc: ()=>{
                return state.filter(todo=>todo.id !==data);
            }
        },
    ];
    return todoFnc[type].actionFnc();
}
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();
function App() {
    const [mockData,todoForm] = useTodos();
    const [todos, dispatch] = useReducer(reducer,[]);
    const idRef = useRef(mockData.length-1);
    const TODOS_REDUCER_TYPENAMES=["INITIATE","CREATE","UPDATE","DELETE"];

    useEffect( () => {
        dispatch({
            type: TODOS_REDUCER_TYPENAMES.indexOf("INITIATE"),
            data: mockData,
        });
    }, []);

    const createTodo=useCallback((content)=>{
        const newTodo = {
            ...todoForm,
            id: ++idRef.current,
            content,
            date: new Date().getTime()
        };
        dispatch(
            {
                type: TODOS_REDUCER_TYPENAMES.indexOf("CREATE"),
                data: newTodo,
            }
        );
    },[]);

    const updateTodo=useCallback((targetId)=>{
        dispatch({
            type: TODOS_REDUCER_TYPENAMES.indexOf("UPDATE"),
            data: targetId
        });
    },[]);
    const deleteTodo = useCallback((targetId)=>{
        dispatch({
            type: TODOS_REDUCER_TYPENAMES.indexOf("DELETE"),
            data: targetId,
        });
    },[]);
    const memoizedDispatch=useMemo(()=>{
        return {
            updateTodo,
            deleteTodo,
        }
    });
    return (
        <div className="App">
            <Header/>
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor onCreate={createTodo}/>
                    <List
                        todos={todos}
                    />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>

            <Footer/>
        </div>
    )
}

export default App
