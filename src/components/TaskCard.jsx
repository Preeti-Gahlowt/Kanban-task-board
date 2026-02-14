function TaskCard({ task, deleteTask, moveTask }) {
  return (
    <div className="task-card">
      <p>{task.text}</p>

      <div className="buttons">
        {task.status !== "todo" && (
          <button onClick={() => moveTask(task.id, "todo")}>
            To Do
          </button>
        )}

        {task.status !== "inprogress" && (
          <button onClick={() => moveTask(task.id, "inprogress")}>
            In Progress
          </button>
        )}

        {task.status !== "done" && (
          <button onClick={() => moveTask(task.id, "done")}>
            Done
          </button>
        )}

        <button className="delete" onClick={() => deleteTask(task.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
