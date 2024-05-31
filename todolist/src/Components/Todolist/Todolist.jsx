
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo/Todo.jsx";

function Todolist({todoEdit,todoDelet,todoFinished}){

  const list=useSelector((state)=>state.todo.todoList)
  console.log(list)
 

  return (
//     <div>
//       {list.length>0 &&
//         list.map((todo) => (
//           <Todo
//             key={todo.id}
//             id={todo.id}
//             isFinished={todo.finished}
//             todoData={todo.todoData}
//             changeFinished={(isFinished) => todoFinished({todo, isFinished})}
//             onDelet={() => todoDelet({todo})}
//             onEdit={(todotext) =>todoEdit({todo, todotext})}
//           />
// ))}
//     </div>
<div className="mt-8">
{list.length > 0 &&
  list.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      isFinished={todo.finished}
      todoData={todo.todoData}
      changeFinished={(isFinished) => todoFinished({ todo, isFinished })}
      onDelet={() => todoDelet({ todo })}
      onEdit={(todotext) => todoEdit({ todo, todotext })}
    />
  ))}
</div>
  );
}
export default Todolist
