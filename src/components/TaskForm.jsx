import { useState } from "react";
import TaskInput from "./TaskInput";

function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    addTask(inputValue);
    setInputValue("");
  };

  return (
    <form className="input-section" onSubmit={handleSubmit}>
      <TaskInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
