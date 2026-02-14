import { useState } from "react";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // MOVE TASK
  const moveTask = (id, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>🔥 Kanban Task Board</h1>

      <TaskForm addTask={addTask} />

      <div className="board">
        <Column
          title="To Do"
          status="todo"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />

        <Column
          title="In Progress"
          status="inprogress"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />

        <Column
          title="Done"
          status="done"
          tasks={tasks}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />
      </div>
    </div>
  );
}

export default App;
