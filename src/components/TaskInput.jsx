function TaskInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter new task..."
      value={value}
      onChange={onChange}
    />
  );
}

export default TaskInput;
