import {JsonDB, Config} from "node-json-db";

// const todoDB = new JsonDB(new Config("todoDatabase.json", true,true,"/"));
//
// const todoForm = {
//     id:0,
//     isDone: false,
//     content:"",
//     date: "",
// };
// const mockData = [
//     {
//         id: 0,
//         isDone: false,
//         content: "React 공부하기",
//         date: new Date().getTime(),
//     },
//     {
//         id: 1,
//         isDone: false,
//         content: "Java 공부하기",
//         date: new Date().getTime(),
//     },
//     {
//         id: 2,
//         isDone: false,
//         content: "Spring 공부하기",
//         date: new Date().getTime(),
//     },
// ];
// const initMockData =async ()=>{
//     await todoDB.push("/api/todos",mockData);
// }
// const saveTodos=async({...todoData})=>{
//     await todoDB.push("/api/todos", {
//         ...todoForm,
//         ...todoData,
//     });
// }
//
// export {
//     todoDB,
//     todoForm,
//     initMockData,
//     saveTodos,
// }