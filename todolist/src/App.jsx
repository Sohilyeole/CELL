import { useDispatch } from "react-redux";
import "./App.css";
import AddTodo from "./Components/Addtodo/Addtodo";
import Todolist from "./Components/Todolist/Todolist";
import { bindActionCreators } from "redux";
// import { todoFinisheds,todoDelet,todoEdit,todoAdd } from "./action/todoAction";
import todoReducer,{addTodo,editTodo,deletTodo,todoFinish} from "./slices/todoslice"



function App() {
  const dispatch=useDispatch();
  const actions=bindActionCreators({addTodo,editTodo,deletTodo,todoFinish},dispatch)


  return (
    <>

         {/* <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 ">
      <AddTodo todoAdd={actions.addTodo} />
      <Todolist todoDelet={actions.deletTodo} todoEdit={actions.editTodo} todoFinished={actions.todoFinish} />
    </div> */}
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
  <div className="w-full sm:w-1/2 bg-white rounded-lg shadow-md p-8">
    <AddTodo todoAdd={actions.addTodo} />
    <Todolist todoDelet={actions.deletTodo} todoEdit={actions.editTodo} todoFinished={actions.todoFinish} />
  </div>
</div>
    </>
  );
}

export default App;
