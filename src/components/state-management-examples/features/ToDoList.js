// create a to-do list. You should be able to add and remove tasks

import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

    // logic - adding
  const addTask = () => {
    if (task.trim() === "") return;
      setList([...list, task]);
      //   ... is the seaprator operator
      // It copies all items from list into a new array
    // The spread operator copies an array to create a new state without mutation
    setTask("");
  };
 
    // logic - removing
  const removeTask = (index) => {
    setList(list.filter((_, i) => i !== index));
    };
    // === checks both value and type (Strict equality)
    // == performs type coercion before comparison.(Loose Equality)

  return (
    <div className=" card todo-list">
      <h4 className="mb-10">ToDo List</h4>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control"
      />

      <button onClick={addTask} className="addBtn">Add List</button>

      <ul className="list-item">
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeTask(index)} className="addBtn">Remove</button>
          </li>
        ))}
          </ul>
          {/* 
               . Input must be controlled

               .  List must be stored in state

               . Use map() to render list

               . Use filter() to remove item
          
          */}

          {/* A to-do list stores tasks in state, adds items immutably, and removes them using array filtering. */}
    </div>
  );
}

export default ToDoList;