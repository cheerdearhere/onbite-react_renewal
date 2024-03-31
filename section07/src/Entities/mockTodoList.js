const useTodos = ()=>{
    const mockData = [
        {
            id: 0,
            isDone: false,
            content: "React 공부하기",
            date: new Date().getTime(),
        },
        {
            id: 1,
            isDone: false,
            content: "Java 공부하기",
            date: new Date().getTime(),
        },
        {
            id: 2,
            isDone: false,
            content: "Spring 공부하기",
            date: new Date().getTime(),
        },
    ];
    const todoForm = {
        id:0,
        isDone: false,
        content:"",
        date: "",
    };
    return [mockData, todoForm];
}
export default useTodos;