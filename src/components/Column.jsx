import TaskCard from "./TaskCard";

function Column({ title, status, tasks, deleteTask, moveTask }) {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div className="column">
      <h2>{title}</h2>

      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          moveTask={moveTask}
        />
      ))}
    </div>
  );
}

export default Column;
