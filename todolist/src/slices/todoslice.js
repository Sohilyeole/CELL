import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoList: []
};
const todoSilice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (todo, action) => {
        console.log("hii")
        
      let todotext = action.payload.todotext;
      todo.todoList.push({
        id: todo.todoList.length + 1,
        todoData: todotext,
        finished: false,
      });
    },
    editTodo: (todo, action) => {
      let payloadtodo = action.payload.todo;
      let todotext = action.payload.todotext;
      todo.todoList= todo.todoList.map((t) => {
        if (t.id == payloadtodo.id) {
          t.todoData = todotext;
        }
        return t;
      });
    },
    todoFinish: (todo, action) => {
      const  payloadtodo = action.payload.todo;
      const isFinished = action.payload.isFinished;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id ==  payloadtodo.id) {
          todo.finished = isFinished;
        }
        return t;
      });
    },
    deletTodo:(todo,action)=>{
        let payloadtodo=action.payload.todo;
        todo.todoList = todo.todoList.filter((t) => t.id !== payloadtodo.id);
       
    }
    
  },
});
export const{deletTodo,addTodo,editTodo,todoFinish}=todoSilice.actions
export default todoSilice.reducer