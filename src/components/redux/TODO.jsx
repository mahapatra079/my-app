import { Trash2 } from "lucide-react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask } from "../../store"

export const TODO = () => { 

    const [task, setTask] = useState("") // Local state to manage the input value for a new task

    const tasks = useSelector(state => state.task) // Accessing state from the Redux store using useSelector hook
    console.log("TODO state:", tasks)

    // Get the dispatch function from the Redux store using useDispatch hook
    const dispatch = useDispatch() 

    const handleSubmit = (e) => {
        e.preventDefault() // Prevent the default form submission behavior
        dispatch(addTask(task)) // Dispatch an action to add a new task to the Redux store
        return setTask("") // Clear the input field after adding a task
    }

    return (
        <>
            <div className="card">
                <h2 className="font-bold text-lg mb-10">ToDo App</h2>
                <form className="card flex items-center gap-2" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control form-input"
                        placeholder="Enter a new task..."
                        value={task} // Bind the input value to the local state
                        onChange={(e) => setTask(e.target.value)} // Update the local state when the input value changes
                    />
                    <button className="addBtn" type="submit">Add Task</button>
                </form>

                <ul id="redux-list" className="card">
                    {tasks.map((curTask, index) => {
                        return (
                            <li key={index} className="card border-2 border-gray-300 p-2">
                                <div className="flex items-center gap-2">
                                    <p>{index}: {curTask}</p>
                                    <Trash2 size={14} className="cursor-pointer text-red-600 font-bold" onClick={() => dispatch(deleteTask(index))} />
                                    {/* Dispatch an action to delete a task from the Redux store based on its index */}
                                </div>
                            </li>
                        );
                    }) }
                </ul>
            </div>
        </>
    )
}