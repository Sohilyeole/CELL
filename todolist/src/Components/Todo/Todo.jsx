import { useContext, useState } from "react";

function Todo({todoData,isFinished,changeFinished,onDelet,onEdit}){
  
    const [finished,setfinished]=useState(isFinished)
    const [isediting,setisediting]=useState(false)
    const [edittext,setedittext]=useState(todoData)
  
return(
    <div className="flex items-center justify-between py-2 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={finished}
          onChange={(e) => {
            setfinished(e.target.checked);
            changeFinished(e.target.checked);
          }}
          className="mr-4"
        />
        {isediting ? (
          <input
            type="text"
            value={edittext}
            onChange={(e) => setedittext(e.target.value)}
            className="bg-transparent border-b border-gray-400 focus:outline-none"
          />
        ) : (
          <span className={finished ? "line-through" : ""}>{todoData}</span>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setisediting(!isediting);
            onEdit(edittext);
          }}
          className="mr-2 text-blue-600 hover:text-blue-900"
        >
          {isediting ? "Save" : "Edit"}
        </button>
        <button onClick={onDelet} className="text-red-600 hover:text-red-900">
          Delete
        </button>
      </div>
    </div>




);
}

export default Todo;