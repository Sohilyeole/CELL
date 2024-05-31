import {  useState } from "react"
import { addTodo } from "../../slices/todoslice";
function AddTodo({todoAdd}){
  
    const [inputtext,setinputtext]=useState("");
   
return (
    <div className="mb-8">
      <input
        type="text"
        value={inputtext}
        placeholder="Add todo"
        onChange={(e) => setinputtext(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        onClick={() => {
          todoAdd({ todotext: inputtext });
          setinputtext("");
        }}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Add
      </button>
    </div>
)
}
export default AddTodo