import { useState, useEffect, useRef, useCallback, useMemo } from "react";

export const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // Mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(stored);
    inputRef.current.focus();
    console.log("component called mounting")
  }, []);

  // Update
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(() => {
    if (!input.trim()) return;

    setTasks(prev => [
      ...prev,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput("");
  }, [input]);

  const toggleTask = useCallback((id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const completedCount = useMemo(() => {
    return tasks.filter(t => t.completed).length;
  }, [tasks]);

  return (
    <div className="card task-manager">
      <h2 className="mb-20">Task Manager</h2>

      <input
        ref={inputRef}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add task"
        className="form-control mb-10"
      />

      <button className="addBtn" onClick={addTask}>Add</button>

      <p>Completed: {completedCount}</p>

      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
